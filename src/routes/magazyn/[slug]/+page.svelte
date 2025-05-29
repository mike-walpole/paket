<script>
  import { urlFor } from '$lib/sanity';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import BlockContent from '$lib/components/BlockContent.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  
  export let data;
  
  const { post, relatedPosts } = data;
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pl-PL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };

  // Extract a simple description from the body for meta tags
  function extractDescription(body) {
    if (!body || !Array.isArray(body) || body.length === 0) {
      return 'Artykuł na blogu Paket';
    }
    
    // Try to find the first paragraph block
    const firstParagraph = body.find(block => 
      block._type === 'block' && 
      (!block.style || block.style === 'normal') && 
      block.children && 
      block.children.length > 0
    );
    
    if (firstParagraph && firstParagraph.children) {
      // Extract text from the first paragraph
      const text = firstParagraph.children
        .map(child => child.text || '')
        .join('')
        .trim();
        
      if (text) {
        return text.length > 160 ? text.substring(0, 157) + '...' : text;
      }
    }
    
    return 'Artykuł na blogu Paket';
  }
  
  const metaDescription = extractDescription(post.body);
</script>

<svelte:head>
  <title>{post.title} | Magazyn Paket</title>
  <meta name="description" content={metaDescription} />
  {#if post.mainImage}
    <meta property="og:image" content={urlFor(post.mainImage).width(1200).height(630).url()} />
  {/if}
</svelte:head>

<div class="relative">
  <Navbar />
  
  <article class="pt-12 md:pt-16 pb-24">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <!-- Header -->
        <div class="mt-24 mb-8">
          {#if post.categories && post.categories.length > 0}
            <div class="flex flex-wrap gap-2 mb-4">
              {#each post.categories as category}
                <a href="/magazyn" class="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200">
                  {category}
                </a>
              {/each}
            </div>
          {/if}
          
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div class="flex items-center mb-8">
            <div class="text-gray-500">
              <div class="flex items-center">
                <span>{formatDate(post.publishedAt)}</span>
                <span class="mx-2">•</span>
                <span>{post.authorName || 'Zespół Paket'}</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Main image -->
        {#if post.mainImage}
          <div class="mb-12">
            <img 
              src={urlFor(post.mainImage).width(1200).height(675).url()} 
              alt={post.title} 
              class="w-full rounded-lg shadow-md"
            />
          </div>
        {/if}
        
        <!-- Content -->
        <div class="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-700">
          <BlockContent blocks={post.body} />
        </div>
      </div>
      
      <!-- Related posts -->
      {#if relatedPosts && relatedPosts.length > 0}
        <div class="max-w-6xl mx-auto mt-20">
          <h2 class="text-2xl md:text-3xl font-bold mb-8 text-center">Powiązane artykuły</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each relatedPosts as relatedPost}
              <PostCard post={relatedPost} />
            {/each}
          </div>
        </div>
      {/if}
    </div>
  </article>
</div>

<Footer /> 