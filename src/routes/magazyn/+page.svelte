<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  
  export let data;
  
  let posts = data.posts || [];
  let categories = data.categories || [];
  let selectedCategory = null;
  
  $: filteredPosts = selectedCategory 
    ? posts.filter(post => post.categories && post.categories.includes(selectedCategory.title))
    : posts;
  
  function selectCategory(category) {
    selectedCategory = selectedCategory === category ? null : category;
  }
</script>

<svelte:head>
  <title>Paket Na Temat</title>
  <meta name="description" content="Blog Paket - artykuły i porady o nieruchomościach, remontach, aranżacji wnętrz i rynku nieruchomości." />
</svelte:head>

<div class="relative">
  <Navbar />
  
  <!-- Hero section -->
  <div class="relative h-[33vh] overflow-hidden" 
       style="background-image: url('/cherwell6.avif'); 
              background-size: cover;
              background-position: center;">
    <div class="absolute inset-0 bg-black/20 z-10"></div>
    <div class="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Paket Na Temat</h1>
      <p class="text-xl md:text-2xl text-white max-w-3xl">Porady, inspiracje i trendy w świecie nieruchomości</p>
    </div>
  </div>

  <!-- Category filters -->
  {#if categories.length > 0}
    <div class="bg-white border-b">
      <div class="container mx-auto px-4 py-4">
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-gray-700 font-medium">Kategorie:</span>
          {#each categories as category}
            <button 
              class={`px-3 py-1 text-sm rounded-full transition-colors ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              on:click={() => selectCategory(category)}
            >
              {category.title}
            </button>
          {/each}
          {#if selectedCategory}
            <button 
              class="px-3 py-1 text-sm rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 ml-2"
              on:click={() => selectCategory(null)}
            >
              Wyczyść filtr
            </button>
          {/if}
        </div>
      </div>
    </div>
  {/if}

  <!-- Blog posts grid -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      {#if filteredPosts.length > 0}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {#each filteredPosts as post}
            <PostCard {post} />
          {/each}
        </div>
      {:else}
        <div class="text-center py-16">
          <h3 class="text-2xl font-bold text-gray-600 mb-4">Brak artykułów</h3>
          <p class="text-gray-500">
            {selectedCategory 
              ? `Nie znaleziono artykułów w kategorii "${selectedCategory.title}"` 
              : 'Nie znaleziono żadnych artykułów'}
          </p>
          {#if selectedCategory}
            <button 
              class="mt-4 px-4 py-2 bg-black text-white rounded-md hover:bg-black/80"
              on:click={() => selectCategory(null)}
            >
              Pokaż wszystkie artykuły
            </button>
          {/if}
        </div>
      {/if}
    </div>
  </section>
</div>

<Footer /> 