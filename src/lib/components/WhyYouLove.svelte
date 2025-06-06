<script>
  const reasons = [
    "Profesjonalna obsługa na każdym etapie transakcji",
    "Dokładna analiza rynku i wycena nieruchomości",
    "Bezpieczeństwo transakcji i weryfikacja stanu prawnego",
    "Szeroki wybór mieszkań od sprawdzonych deweloperów",
    "Kompleksowe usługi remontowe i modernizacyjne",
    "Indywidualne podejście do potrzeb każdego klienta",
    "Doświadczony zespół doradców nieruchomościowych",
    "Transparentność w procesie zakupu i sprzedaży",
    "Wsparcie w wyborze optymalnego finansowania"
  ];
</script>

<div class="px-4 sm:px-6 lg:px-8 py-24 bg-gray-100">
  <div class="max-w-7xl mx-auto text-center">
    <h2 class="text-4xl md:text-5xl font-bold mb-16">Co wyróżnia Paket?</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each reasons as reason, index}
        <div class="flex items-start">
          <div class="flex-shrink-0 mt-1">
            <svg class="h-5 w-5 text-red-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
            </svg>
          </div>
          <p class="ml-3 text-left">{reason}</p>
        </div>
      {/each}
    </div>
    
    <div class="mt-16">
      <p class="text-xl font-medium mb-8">
        "Znajdujemy wymarzone miejsca do życia – z pasją i profesjonalizmem."
      </p>
      <a href="/kontakt" class="inline-flex items-center px-8 py-3 border border-red-900 text-base font-medium rounded-full bg-red-900 text-white hover:bg-red-950 hover:border-red-950 transition-colors duration-200">
        Umów spotkanie
      </a>
    </div>
  </div>
</div> 