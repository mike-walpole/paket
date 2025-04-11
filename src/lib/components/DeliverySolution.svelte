<script>
  const services = [
    'Mieszkania od deweloperów',
    'Rynek wtórny',
    'Usługi remontowe',
    'Wycena nieruchomości',
    'Doradztwo inwestycyjne',
    'Finansowanie',
    'Nadzór budowlany',
    'Projekty wnętrz',
    'Kompleksowa obsługa transakcji',
    'Weryfikacja stanu prawnego',
    'i wiele innych...'
  ];
</script>

<div class="px-4 sm:px-6 lg:px-8 py-24 bg-white">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    <!-- Left Content -->
    <div>
      <h2 class="text-4xl md:text-5xl font-normal mb-8">Kompleksowe rozwiązania nieruchomościowe</h2>
      <p class="text-lg mb-8">
        W Paket oferujemy pełny zakres usług związanych z nieruchomościami. Nasz doświadczony zespół doradców pomoże Ci znaleźć wymarzone miejsce do życia, przeprowadzi Cię przez cały proces zakupu lub sprzedaży, a także zadba o profesjonalne remonty i modernizacje.
      </p>
      
      <div class="mb-8">
        <h3 class="text-xl font-medium mb-4">Nasze usługi:</h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
          {#each services as service}
            <div class="flex items-center">
              <div class="w-2 h-2 bg-red-900 rounded-full mr-2"></div>
              <span>{service}</span>
            </div>
          {/each}
        </div>
      </div>
      
      <div>
        <a href="/kontakt" class="inline-flex items-center px-8 py-3 border border-red-900 text-base font-medium rounded-full bg-transparent hover:bg-red-900 hover:text-white transition-colors duration-200">
          Umów konsultację
        </a>
      </div>
    </div>
    
    <!-- Right Content -->
    <div class="relative">
      <div class="aspect-w-16 aspect-h-9 md:aspect-h-10">
        <div class="bg-gray-200 h-full w-full flex items-center justify-center text-gray-500">
          <img src="/budsol2.avif" alt="Nasze biuro nieruchomości" class="w-full h-full object-cover">
        </div>
      </div>
    </div>
  </div>
</div> 