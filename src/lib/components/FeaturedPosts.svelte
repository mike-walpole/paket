<script>
  import PostCard from './PostCard.svelte';
  
  export let posts = [];
</script>

<section class="py-16 md:py-24 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Paket Na Temat</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Najnowsze artykuły i porady z naszego bloga o nieruchomościach, remontach i aranżacji wnętrz
        </p>
        <a 
          href="/magazyn" 
          class="inline-flex items-center text-black hover:text-red-900 font-medium transition-colors duration-200"
        >
          Zobacz wszystkie artykuły
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </a>
      </div>

      <!-- Posts grid -->
      {#if posts && posts.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each posts as post}
            <PostCard {post} />
          {/each}
        </div>
      {:else}
        <div class="text-center py-12">
          <div class="bg-white rounded-lg p-8 shadow-sm">
            <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
            </svg>
            <h3 class="text-xl font-semibold text-gray-600 mb-2">Wkrótce nowe artykuły</h3>
            <p class="text-gray-500 mb-4">Pracujemy nad wartościowymi treściami dla naszych czytelników</p>
            <a 
              href="/magazyn" 
              class="inline-flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-red-900 transition-colors duration-200"
            >
              Odwiedź nasz blog
            </a>
          </div>
        </div>
      {/if}
    </div>
  </div>
</section> 