<script>
  const stats = [
    {
      value: "10+",
      label: "Lat doświadczenia",
      description: "Profesjonalna obsługa klientów na rynku nieruchomości"
    },
    {
      value: "500+",
      label: "Zadowolonych klientów",
      description: "Pomogliśmy znaleźć wymarzone miejsca do życia"
    },
    {
      value: "1000+",
      label: "Zrealizowanych transakcji",
      description: "Bezpieczne i transparentne procesy zakupu i sprzedaży"
    },
    {
      value: "50+",
      label: "Współpracujących deweloperów",
      description: "Dostęp do najlepszych inwestycji na rynku"
    }
  ];
</script>

<div class="bg-[#780000] text-white font-['Haas']">
  <div class="px-4 sm:px-6 lg:px-8 py-24">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
      {#each stats as stat}
        <div class="relative pl-8 {stats.indexOf(stat) > 0 ? 'md:border-l border-white/30' : ''} {stats.indexOf(stat) !== stats.length - 1 ? 'md:border-b-0 border-b border-white/30 pb-12 md:pb-0' : ''}">
          <div>
            <p class="text-5xl font-bold mb-4">{stat.value}</p>
            <h3 class="text-xl font-bold mb-2">{stat.label}</h3>
            <p class="text-base text-white/80">{stat.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div> 