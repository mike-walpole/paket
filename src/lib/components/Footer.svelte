<script>
  const produkty = [
    { title: 'Mieszkania', href: '/nieruchomosci/mieszkania' },
    { title: 'Domy', href: '/nieruchomosci/domy' },
    { title: 'Lokale', href: '/nieruchomosci/lokale' },
    { title: 'Działki', href: '/nieruchomosci/dzialki' }
  ];

  const oFirmie = [
    { title: 'O nas', href: '/o-nas' },
    { title: 'Zespół', href: '/zespol' },
    { title: 'Referencje', href: '/referencje' },
    { title: 'Kariera', href: '/kariera' }
  ];

  const dlaKlienta = [
    { title: 'Kalkulator kredytowy', href: '/kalkulator' },
    { title: 'Pytania i odpowiedzi', href: '/faq' },
    { title: 'Współpraca', href: '/wspolpraca' },
    { title: 'Kontakt', href: '/kontakt' }
  ];

  const social = [
    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
    { name: 'Facebook', href: 'https://facebook.com', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
    { name: 'Instagram', href: 'https://instagram.com', icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z' }
  ];
</script>

<footer class="bg-red-900 text-white py-24">
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
      <!-- Newsletter Section -->
      <div>
        <h3 class="text-lg mb-4">Newsletter Paket</h3>
        <p class="text-white/80 text-base mb-6">
          Zapisz się na nasz newsletter, aby otrzymywać informacje o nowościach w ofercie, promocjach dla firm oraz ekologicznych rozwiązaniach w branży opakowań.
        </p>
        <a 
          href="/newsletter" 
          class="inline-flex items-center px-6 py-2 border border-white rounded-full text-sm font-normal hover:bg-white hover:text-red-900 transition-colors duration-200"
        >
          Zapisz się
        </a>
        
        <!-- Social Icons -->
        <div class="flex space-x-4 mt-8">
          {#each social as network}
            <a
              href={network.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={network.name}
              class="text-white/70 hover:text-white transition-colors duration-200"
            >
              <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={network.icon}></path>
              </svg>
            </a>
          {/each}
        </div>
      </div>
      
      <!-- Produkty -->
      <div>
        <h3 class="text-lg mb-4">Nieruchomości</h3>
        <ul class="space-y-2">
          {#each produkty as item}
            <li>
              <a href={item.href} class="text-white/80 hover:text-white transition-colors duration-200">
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- O firmie -->
      <div>
        <h3 class="text-lg mb-4">O firmie</h3>
        <ul class="space-y-2">
          {#each oFirmie as item}
            <li>
              <a href={item.href} class="text-white/80 hover:text-white transition-colors duration-200">
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- Dla klienta -->
      <div>
        <h3 class="text-lg mb-4">Dla klienta</h3>
        <ul class="space-y-2">
          {#each dlaKlienta as item}
            <li>
              <a href={item.href} class="text-white/80 hover:text-white transition-colors duration-200">
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    
    <!-- Bottom section with copyright -->
    <div class="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-start md:items-center">
      <p class="text-white/60 text-sm mb-4 md:mb-0">
        &copy; {new Date().getFullYear()} Paket. Wszelkie prawa zastrzeżone.
      </p>
      <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
        <a href="/polityka-prywatnosci" class="text-white/60 hover:text-white text-sm">
          Polityka prywatności
        </a>
        <a href="/regulamin" class="text-white/60 hover:text-white text-sm">
          Regulamin
        </a>
        <a href="/cookie" class="text-white/60 hover:text-white text-sm">
          Polityka cookie
        </a>
      </div>
    </div>
  </div>
</footer> 