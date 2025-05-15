<script>
  import { urlFor } from '$lib/sanity';
  
  export let blocks = [];
  
  // Helper function to render blocks recursively
  function renderBlocks(blocks) {
    if (!blocks || !Array.isArray(blocks)) return '';
    
    return blocks.map(block => {
      // Handle different block types
      if (block._type === 'block') {
        return renderTextBlock(block);
      } else if (block._type === 'image') {
        return renderImage(block);
      }
      
      // Default return empty string for unknown block types
      return '';
    }).join('');
  }
  
  // Render text blocks (paragraphs, headings, etc.)
  function renderTextBlock(block) {
    const style = block.style || 'normal';
    
    // Get the text content with marks applied
    const content = renderMarks(block.children || []);
    
    // Apply the appropriate style
    switch (style) {
      case 'h1':
        return `<h1 class="text-3xl md:text-4xl font-bold mt-8 mb-4">${content}</h1>`;
      case 'h2':
        return `<h2 class="text-2xl md:text-3xl font-bold mt-8 mb-4">${content}</h2>`;
      case 'h3':
        return `<h3 class="text-xl md:text-2xl font-bold mt-6 mb-3">${content}</h3>`;
      case 'h4':
        return `<h4 class="text-lg md:text-xl font-bold mt-6 mb-2">${content}</h4>`;
      case 'blockquote':
        return `<blockquote class="border-l-4 border-black pl-4 italic my-6 text-gray-700">${content}</blockquote>`;
      default:
        return `<p class="mb-4 text-gray-800 leading-relaxed">${content}</p>`;
    }
  }
  
  // Render text with marks (bold, italic, links, etc.)
  function renderMarks(children) {
    if (!children || !Array.isArray(children)) return '';
    
    return children.map(child => {
      if (!child.text) return '';
      
      let text = escapeHtml(child.text);
      
      // Apply marks in reverse to handle nested marks
      if (child.marks && Array.isArray(child.marks)) {
        // Sort marks to ensure consistent application
        const sortedMarks = [...child.marks].sort();
        
        // Apply each mark
        for (const mark of sortedMarks) {
          if (mark === 'strong') {
            text = `<strong>${text}</strong>`;
          } else if (mark === 'em') {
            text = `<em>${text}</em>`;
          } else if (mark === 'code') {
            text = `<code class="bg-gray-100 px-1 py-0.5 rounded text-sm">${text}</code>`;
          } else if (mark === 'underline') {
            text = `<span class="underline">${text}</span>`;
          } else if (mark === 'strike-through') {
            text = `<span class="line-through">${text}</span>`;
          } else if (typeof mark === 'object' && mark._type === 'link') {
            const href = mark.href || '#';
            const isExternal = href.startsWith('http');
            const rel = isExternal ? 'noreferrer noopener' : undefined;
            const target = isExternal ? '_blank' : undefined;
            text = `<a href="${href}" rel="${rel || ''}" target="${target || ''}" class="text-black underline hover:text-black/80">${text}</a>`;
          }
        }
      }
      
      return text;
    }).join('');
  }
  
  // Render image blocks
  function renderImage(block) {
    if (!block.asset) return '';
    
    const imageUrl = urlFor(block).width(800).url();
    const alt = block.alt || '';
    const caption = block.caption || '';
    
    return `
      <figure class="my-8">
        <img src="${imageUrl}" alt="${alt}" class="rounded-lg mx-auto" />
        ${caption ? `<figcaption class="text-center text-sm text-gray-500 mt-2">${caption}</figcaption>` : ''}
      </figure>
    `;
  }
  
  // Helper function to escape HTML special characters
  function escapeHtml(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  
  // Generate the final HTML
  $: html = renderBlocks(blocks);
</script>

<!-- Svelte 5 safe way to render HTML content -->
{#if blocks && blocks.length > 0}
  <div class="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700">
    {@html html}
  </div>
{:else}
  <div class="animate-pulse py-4">
    <div class="h-4 bg-gray-200 rounded mb-3"></div>
    <div class="h-4 bg-gray-200 rounded mb-3 w-5/6"></div>
    <div class="h-4 bg-gray-200 rounded mb-3 w-4/6"></div>
  </div>
{/if} 