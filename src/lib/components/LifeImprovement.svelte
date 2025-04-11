<script>
  const improvements = [
    {
      icon: "💰",
      title: "Większe zyski",
      description: "Zwiększysz obłożenie hotelu o 30-50%, a dzięki systemowi dynamicznych cen zmaksymalizujesz przychód z każdego pokoju. Bezpośrednie rezerwacje pozwolą Ci zatrzymać więcej pieniędzy zamiast oddawać je w prowizjach."
    },
    {
      icon: "⏱️",
      title: "Więcej czasu",
      description: "Automatyzacja procesów uwolni Cię od żmudnych zadań administracyjnych. Zamiast tracić 25 godzin tygodniowo na zarządzanie rezerwacjami, będziesz mógł poświęcić ten czas na rozwój biznesu lub po prostu odpocząć."
    },
    {
      icon: "😌",
      title: "Mniej stresu",
      description: "Koniec z dublowaniem rezerwacji, pomyłkami w kalendarzach i ciągłym sprawdzaniem różnych platform. Wszystko będzie zsynchronizowane i pod kontrolą. Twój biznes będzie działał sprawniej, a Ty odzyskasz spokój ducha."
    }
  ];
</script>

<div class="px-4 sm:px-6 lg:px-8 py-24 bg-white">
  <h2 class="text-6xl mb-24 font-normal">Jak zmieni się Twoje życie<br/>z HotelGo?</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-3 gap-16">
    {#each improvements as improvement, index}
      <div class="relative pl-8 border-l border-black">
        <div class="text-5xl mb-8">{improvement.icon}</div>
        <h3 class="text-2xl font-bold mb-4 font-['Haas']">{improvement.title}</h3>
        <p class="text-lg font-normal font-['Haas']">{improvement.description}</p>
        
        <div class="mt-8 group flex items-center">
          <div class="w-2.5 h-2.5 rounded-full bg-black"></div>
          <span class="ml-2 text-xs font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Dowiedz się więcej
          </span>
        </div>
      </div>
    {/each}
  </div>
</div> 