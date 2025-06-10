<script>
  const produkty = [
    { title: 'Kupuję', href: '/kupuje' },
    { title: 'Sprzedaję', href: '/sprzedaje' },
    { title: 'Remontuję', href: '/remontuje' },
    { title: 'Paket na Temat', href: '/magazyn' }
  ];

  const oFirmie = [
    { title: 'O nas', href: '/o-nas' },
    { title: 'Zespół', href: '/zespol' },
    { title: 'Referencje', href: '/referencje' },
    { title: 'Kariera', href: '/kariera' }
  ];

  const dlaKlienta = [
    { title: 'Współpraca', href: '/wspolpraca' },
    { title: 'Kontakt', href: '/kontakt' }
  ];

  const social = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61576960660451',
      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
      viewBox: '0 0 24 24'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/paket_nieruchomosci/',
      icon: 'M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z',
      viewBox: '0 0 24 24'
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@paket_nieruchomosci',
      icon: 'M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z',
      viewBox: '0 0 512 512'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/channel/UCnhnBnRLePob15aj52qTJqQ',
      icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
      viewBox: '0 0 24 24'
    }
  ];
</script>

<footer class="text-gray-900 py-24" style="background-color: #F8F5F1;">
  <div class="px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
      <!-- Newsletter Section -->
     
      
      <!-- Produkty -->
      <div>
        <h3 class="text-lg mb-4">Nieruchomości</h3>
        <ul class="space-y-2">
          {#each produkty as item}
            <li>
              <a href={item.href} class="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
      
      <!-- O firmie -->
      
      
      <!-- Dla klienta -->
      <div>
        <h3 class="text-lg mb-4">O nas</h3>
        <ul class="space-y-2">
          {#each dlaKlienta as item}
            <li>
              <a href={item.href} class="text-gray-700 hover:text-gray-900 transition-colors duration-200">
                {item.title}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>
    
    <!-- Bottom section with copyright and social -->
    <div class="mt-16 pt-8 border-t border-gray-300 flex flex-col md:flex-row justify-between items-start md:items-center">
      <div class="flex items-center space-x-6 mb-4 md:mb-0">
        {#each social as item}
          <a href={item.href} target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-gray-900">
            <span class="sr-only">{item.name}</span>
            <svg class="h-6 w-6" fill="currentColor" viewBox={item.viewBox} aria-hidden="true">
              <path fill-rule="evenodd" d={item.icon} clip-rule="evenodd" />
            </svg>
          </a>
        {/each}
      </div>
      <div class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-left md:text-right">
        <a href="/polityka-prywatnosci" class="text-gray-600 hover:text-gray-900 text-sm">
          Polityka prywatności
        </a>
      </div>
    </div>
    <div class="mt-8 text-center text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} Paket. Wszelkie prawa zastrzeżone.
    </div>
  </div>
</footer> 