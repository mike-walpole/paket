<script>
  import { onMount } from 'svelte';
  
  let isServicesOpen = false;
  let isImageLoaded = false;
  let imageError = false;
  let isMobileMenuOpen = false;
  let isMobileServicesOpen = false;
  let closeTimeout;
  
  const serviceCategories = [
    {
      title: 'Sprzedaję',
      description: 'Kompleksowa obsługa sprzedaży Twojej nieruchomości z maksymalnym zyskiem.',
      href: '/sprzedaje'
    },
    {
      title: 'Kupuję',
      description: 'Pomoc w znalezieniu i zakupie idealnej nieruchomości dopasowanej do Twoich potrzeb.',
      href: '/kupuje'
    },
    {
      title: 'Remontuję',
      description: 'Kompleksowe usługi remontowe i modernizacyjne dla Twojej nieruchomości.',
      href: '/remontuje'
    }
  ];

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
    if (!isMobileMenuOpen) {
      isMobileServicesOpen = false;
    }
  }

  function toggleMobileServices() {
    isMobileServicesOpen = !isMobileServicesOpen;
  }
  
  function openServicesMenu() {
    // Clear any pending close operations
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      closeTimeout = null;
    }
    isServicesOpen = true;
  }
  
  function closeServicesMenu() {
    // Set a small delay before closing to prevent accidental closures
    closeTimeout = setTimeout(() => {
      isServicesOpen = false;
      closeTimeout = null;
    }, 50);
  }

  // Handle image loading errors
  function handleImageError() {
    imageError = true;
    console.error('Failed to load logo image');
  }

  function handleImageLoad() {
    isImageLoaded = true;
  }

  // Clean up function for event listeners
  onMount(() => {
    return () => {
      isServicesOpen = false;
      isMobileMenuOpen = false;
      isMobileServicesOpen = false;
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  });
</script>

<nav class="absolute w-full bg-black z-50">
  <div class="mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-16 items-center ">
      <div class="flex items-center">
       
        <a href="/">
        <img src="/logowhite.avif" alt="Paket" class="h-6">
        </a>
        
        <div class="hidden max-w-7xl mx-auto md:flex ml-10 space-x-8">
          <!-- Create an invisible connection between button and dropdown -->
          <div class="relative">
            <button 
              class="text-white hover:text-red-200 px-3 py-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 focus:ring-offset-transparent"
              on:mouseenter={openServicesMenu}
              on:mouseleave={closeServicesMenu}
              on:focus={openServicesMenu}
              on:blur={closeServicesMenu}
            >
              Usługi
            </button>
            
            <!-- Invisible connector element to prevent hover gap -->
            {#if isServicesOpen}
              <div 
                class="absolute h-4 w-full bottom-0 translate-y-full" 
                on:mouseenter={openServicesMenu}
                on:mouseleave={closeServicesMenu}
              ></div>
            {/if}
          </div>
          
          
          <a 
            href="/wspolpraca" 
            class="text-white hover:text-red-200 px-3 py-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Współpraca
          </a>
          <a 
            href="/magazyn" 
            class="text-white hover:text-red-200 px-3 py-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Paket Na Temat
          </a>
          <a 
            href="/kontakt" 
            class="text-white hover:text-red-200 px-3 py-2 text-sm font-normal focus:outline-none focus:ring-2 focus:ring-red-900 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Kontakt
          </a>
        </div>
      </div>
      
      <div class="flex items-center">
        <div class="hidden md:block">
          <a
            href="#calendly"
            class="inline-flex items-center px-4 py-2 border border-white text-sm font-medium rounded-md text-white bg-transparent hover:bg-red-900 hover:border-red-900 hover:text-white transition-colors duration-200"
          >
            Umów spotkanie
          </a>
        </div>
        
        <!-- Mobile menu button -->
        <div class="flex md:hidden ml-4">
          <button 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-200 focus:outline-none"
            on:click={toggleMobileMenu}
          >
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {#if isMobileMenuOpen}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              {:else}
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              {/if}
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  {#if isMobileMenuOpen}
    <div class="md:hidden bg-white shadow-lg">
      <div class="px-4 pt-2 pb-3 space-y-1 divide-y divide-gray-200">
        <div class="py-3">
          <button
            class="w-full flex items-center justify-between text-gray-900 px-3 py-3 text-base font-normal"
            on:click={toggleMobileServices}
          >
            <span>Usługi</span>
            <div class="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
              <svg
                class="w-4 h-4 transform transition-transform duration-200 {isMobileServicesOpen ? 'rotate-180' : ''}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </button>
          
          {#if isMobileServicesOpen}
            <div class="mt-2">
              {#each serviceCategories as category}
                <a
                  href={category.href}
                  class="block pl-6 pr-4 py-2 text-base text-gray-600 hover:bg-gray-50 hover:text-red-900"
                >
                  {category.title}
                </a>
              {/each}
            </div>
          {/if}
        </div>
        
        <a href="/o-nas" class="block px-3 py-3 text-base text-gray-900 hover:text-red-900">
          O nas
        </a>
        <a href="/wspolpraca" class="block px-3 py-3 text-base text-gray-900 hover:text-red-900">
          Współpraca
        </a>
        <a href="/magazyn" class="block px-3 py-3 text-base text-gray-900 hover:text-red-900">
          Paket Na Temat
        </a>
        <a href="/kontakt" class="block px-3 py-3 text-base text-gray-900 hover:text-red-900">
          Kontakt
        </a>
        
        <!-- Demo button for mobile -->
        <div class="pt-3 pb-1">
          <a
            href="#calendly"
            class="block w-full text-center px-4 py-3 border border-red-900 text-base font-medium rounded-md text-white bg-red-900 hover:bg-red-950 transition-colors duration-200"
          >
            Umów spotkanie
          </a>
        </div>
      </div>
    </div>
  {/if}

  <!-- Services dropdown menu - moved outside to make it full width -->
  {#if isServicesOpen}
    <div
      class="absolute inset-x-0 top-16 z-20 hidden md:block"
      on:mouseenter={openServicesMenu} 
      on:mouseleave={closeServicesMenu}
    >
      <div class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div class="grid grid-cols-3 gap-8">
            {#each serviceCategories as category}
              <a href={category.href} class="group">
                <h3 class="text-lg font-medium text-gray-900 group-hover:text-red-900">
                  {category.title}
                </h3>
                <p class="mt-2 text-base text-gray-500 group-hover:text-gray-700">
                  {category.description}
                </p>
              </a>
            {/each}
          </div>
        </div>
      </div>
    </div>
  {/if}
</nav> 