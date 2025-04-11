<script>
  const features = [
    {
      title: 'Mieszkania od deweloperów',
      description: 'Współpracujemy z najlepszymi deweloperami w Polsce, oferując ekskluzywne mieszkania w atrakcyjnych lokalizacjach. Gwarantujemy najwyższą jakość i nowoczesne rozwiązania.'
    },
    {
      title: 'Rynek wtórny',
      description: 'Pomagamy znaleźć idealne mieszkanie na rynku wtórnym. Oferujemy profesjonalną wycenę, weryfikację stanu prawnego i kompleksową obsługę transakcji.'
    },
    {
      title: 'Usługi remontowe',
      description: 'Nasz zespół doświadczonych fachowców zapewnia kompleksowe usługi remontowe i modernizacyjne. Zadbamy o każdy detal, transformując Twoją przestrzeń w wymarzone miejsce do życia.'
    }
  ];
</script>

<div class="relative min-h-screen">
  <!-- Background Image -->
  <div class="absolute inset-0">
    <img 
      src="/cherwell6.avif" 
      alt="DomExpert - Twoje zaufane biuro nieruchomości" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/60"></div>
  </div>

  <!-- Content Container -->
  <div class="relative min-h-screen flex flex-col justify-between">
    <!-- Top Content - Only title on desktop -->
    <div class="py-12 px-4 md:px-12">
      <h2 class="text-5xl md:text-6xl leading-tighter text-white md:w-1/2">
            Poznaj Paket®
            Twoje zaufane biuro nieruchomości. Profesjonalna obsługa, bezpieczne transakcje i kompleksowe usługi remontowe. Znajdujemy wymarzone miejsca do życia.
      </h2>
    </div>
    
    <!-- Bottom Content - Features -->
    <div class="py-12 px-4 md:px-12 mt-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        {#each features as feature, index}
          <div class="relative {index > 0 ? 'md:border-l md:pl-4 border-white' : ''}">
            <div>
              <h3 class="text-xl font-bold mb-4">{feature.title}</h3>
              <p class="text-base font-normal">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div> 