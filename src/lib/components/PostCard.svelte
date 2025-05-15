<script>
  import { urlFor } from '$lib/sanity';
  
  export let post;
  
  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pl-PL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
</script>

<a href={`/magazyn/${post.slug.current}`} class="group">
  <article class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
    {#if post.mainImage}
      <div class="relative h-48 overflow-hidden">
        <img 
          src={urlFor(post.mainImage).width(600).height(400).url()} 
          alt={post.title} 
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
        />
      </div>
    {/if}
    
    <div class="p-6">
      <div class="flex items-center text-sm text-gray-500 mb-2">
        <span>{formatDate(post.publishedAt)}</span>
        <span class="mx-2">•</span>
        <span>{post.estimatedReadingTime || 3} min czytania</span>
      </div>
      
      <h3 class="text-xl font-bold mb-3 group-hover:text-black/80 transition-colors duration-300">{post.title}</h3>
      
      {#if post.categories && post.categories.length > 0}
        <div class="mt-4 flex flex-wrap gap-2">
          {#each post.categories as category}
            <span class="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full">{category}</span>
          {/each}
        </div>
      {/if}
    </div>
  </article>
</a> 