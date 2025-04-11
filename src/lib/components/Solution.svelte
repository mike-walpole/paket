<script>
  const features = [
    {
      title: "Automatyczna synchronizacja",
      description: "System HotelGo automatycznie synchronizuje Twoje rezerwacje z Booking.com, Expedia i innymi platformami OTA, eliminując podwójne rezerwacje i błędy."
    },
    {
      title: "Własny system rezerwacji",
      description: "Przyjmuj rezerwacje bezpośrednio przez swoją stronę, bez prowizji dla pośredników. Twoja strona staje się skutecznym narzędziem sprzedaży."
    },
    {
      title: "Pozycjonowanie SEO",
      description: "Dedykowane dla branży hotelarskiej rozwiązania SEO, które zapewniają wysokie pozycje w Google dla kluczowych fraz związanych z Twoją lokalizacją."
    },
    {
      title: "Dynamiczne ceny",
      description: "Inteligentny system dostosowuje ceny Twoich pokoi w zależności od popytu, sezonu i dostępności, maksymalizując Twoje przychody."
    }
  ];
</script>

<div class="px-4 sm:px-6 lg:px-8 py-24 bg-white">
  <div class="flex flex-col md:flex-row">
    <div class="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
      <h2 class="text-6xl mb-8 font-normal">Przedstawiamy HotelGo</h2>
      <p class="text-lg mb-12">
        Kompleksowy system zarządzania, który automatyzuje rezerwacje, zwiększa widoczność online i integruje się z popularnymi platformami OTA. Stworzony specjalnie dla małych i średnich hoteli w Polsce.
      </p>
      <div class="pl-8 border-l border-black">
        <p class="text-xl font-bold">Jedyny system w Polsce, który łączy:</p>
        <ul class="mt-4 space-y-2">
          <li class="flex items-center">
            <div class="w-2 h-2 bg-black rounded-full mr-2"></div>
            <span>Rezerwacje online bez prowizji</span>
          </li>
          <li class="flex items-center">
            <div class="w-2 h-2 bg-black rounded-full mr-2"></div>
            <span>Integrację z OTA</span>
          </li>
          <li class="flex items-center">
            <div class="w-2 h-2 bg-black rounded-full mr-2"></div>
            <span>Pozycjonowanie SEO i marketing</span>
          </li>
          <li class="flex items-center">
            <div class="w-2 h-2 bg-black rounded-full mr-2"></div>
            <span>Wsparcie techniczne 7 dni w tygodniu</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-full md:w-1/2 pl-0 md:pl-8 md:border-l md:border-black">
      <div class="grid grid-cols-1 gap-12">
        {#each features as feature, index}
          <div class="relative">
            <div>
              <h3 class="text-xl font-bold mb-2 font-['Haas']">{feature.title}</h3>
              <p class="text-base font-normal font-['Haas']">{feature.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div> 