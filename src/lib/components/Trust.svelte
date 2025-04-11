<script>
  const guarantees = [
    {
      title: "Gwarancja satysfakcji",
      description: "Jeśli w ciągu pierwszych 30 dni od wdrożenia HotelGo nie będziesz zadowolony z systemu, zwrócimy Ci 100% wpłaconej kwoty. Bez pytań, bez komplikacji."
    },
    {
      title: "Poufność danych",
      description: "Wszystkie dane Twoje i Twoich gości są bezpieczne. Używamy najnowszych technologii szyfrowania i przestrzegamy najwyższych standardów ochrony prywatności."
    },
    {
      title: "Wsparcie 7/24",
      description: "Nasz zespół wsparcia technicznego jest dostępny przez całą dobę, 7 dni w tygodniu. Zawsze otrzymasz pomoc, gdy jej potrzebujesz."
    },
    {
      title: "10+ lat doświadczenia",
      description: "Od ponad dekady współpracujemy z hotelami w całej Polsce. Nasza wiedza i doświadczenie są bezcenne w branży, która nieustannie się zmienia."
    }
  ];
</script>

<div class="bg-gray-100">
  <div class="px-4 sm:px-6 lg:px-8 py-24">
    <div class="flex flex-col md:flex-row">
      <div class="w-full md:w-1/2 md:pr-12 mb-12 md:mb-0">
        <h2 class="text-6xl mb-12 font-normal">Czy można nam zaufać?</h2>
        
        <p class="text-xl mb-8">
          HotelGo jest sprawdzonym rozwiązaniem, które od lat pomaga polskim hotelarzom zwiększać zyski i uprościć zarządzanie obiektem.
        </p>
        
        <div class="pl-8 border-l border-black">
          <ul class="space-y-4 mb-12">
            <li class="flex items-center">
              <div class="w-2 h-2 bg-black rounded-full mr-3"></div>
              <span class="text-lg">Ponad 500 zadowolonych klientów w Polsce</span>
            </li>
            <li class="flex items-center">
              <div class="w-2 h-2 bg-black rounded-full mr-3"></div>
              <span class="text-lg">Średnia ocena 4.9/5 w niezależnych recenzjach</span>
            </li>
            <li class="flex items-center">
              <div class="w-2 h-2 bg-black rounded-full mr-3"></div>
              <span class="text-lg">Tysiące godzin zaoszczędzonych naszym klientom</span>
            </li>
          </ul>
          
          <div class="group flex items-center">
            <div class="w-2.5 h-2.5 rounded-full bg-black"></div>
            <span class="ml-2 text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Zobacz więcej referencji
            </span>
          </div>
        </div>
      </div>
      
      <div class="w-full md:w-1/2 pl-0 md:pl-8 md:border-l md:border-black">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {#each guarantees as guarantee, index}
            <div class="relative">
              <h3 class="text-xl font-bold mb-3 font-['Haas']">{guarantee.title}</h3>
              <p class="text-base font-normal font-['Haas']">{guarantee.description}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</div> 