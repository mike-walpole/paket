<script>
  const services = [
    {
      title: 'Sprzedaję nieruchomość',
      description: 'Sprzedajemy mieszkania poprawnie i z pełnym zaangażowaniem.',
      href: '/sprzedaje',
      buttonText: 'Sprawdź ofertę',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9,22 9,12 15,12 15,22"/>
      </svg>`
    },
    {
      title: 'Kupuję nieruchomość', 
      description: 'Znajdziemy coś, co naprawdę pasuje do Ciebie.',
      href: '/kupuje',
      buttonText: 'Zobacz, co możemy dla Ciebie zrobić',
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>`
    },
    {
      title: 'Remontuję',
      description: 'Wizja, projekt, doradztwo, realizacja - po prostu się tym zajmiemy.',
      href: '/remontuje',
      buttonText: 'Sprawdź ofertę',
      icon: `<img src="/paint-roller.png" alt="Paint roller icon" class="w-16 h-16 object-contain" />`
    }
  ];
</script>

<section class="py-16 md:py-24 bg-white">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {#each services as service}
        <div class="bg-white rounded-lg border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
          <!-- Icon -->
          <div class="flex justify-center mb-6">
            <div class="text-red-900">
              {@html service.icon}
            </div>
          </div>
          
          <!-- Title -->
          <h3 class="text-2xl font-bold text-gray-900 mb-4">
            {service.title}
          </h3>
          
          <!-- Description -->
          <p class="text-gray-600 mb-8 leading-relaxed flex-grow">
            {service.description}
          </p>
          
          <!-- Action Button -->
          <a 
            href={service.href}
            class="inline-flex items-center justify-center px-6 py-3 border border-red-900 text-red-900 font-medium rounded-full hover:bg-red-900 hover:text-white transition-colors duration-200"
          >
            {service.buttonText}
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section> 