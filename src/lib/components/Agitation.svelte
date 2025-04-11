<script>
  const challenges = [
    {
      title: "Tracisz rezerwacje",
      description: "Twoja konkurencja korzysta z nowoczesnych systemów rezerwacji i integracji z OTA, podczas gdy Ty wciąż polegasz na przestarzałych metodach. Każdego dnia tracisz potencjalnych gości i pieniądze."
    },
    {
      title: "Marnujesz czas",
      description: "Ręczne aktualizowanie dostępności pokoi na wielu platformach, odpowiadanie na te same pytania i synchronizacja kalendarzy pochłania Twój cenny czas, który mógłbyś poświęcić na rozwój biznesu."
    },
    {
      title: "Jesteś niewidoczny w sieci",
      description: "Bez odpowiedniego pozycjonowania SEO i strategii marketingowej Twój hotel jest praktycznie niewidoczny dla potencjalnych gości szukających noclegu w internecie."
    },
    {
      title: "Płacisz zbyt wysokie prowizje",
      description: "Platformy OTA pobierają ogromne prowizje od każdej rezerwacji, drastycznie zmniejszając Twoją marżę. Brak własnego systemu rezerwacji oznacza uzależnienie od pośredników."
    }
  ];
</script>

<div class="px-4 sm:px-6 lg:px-8 py-24 bg-black">
  <h2 class="text-6xl mb-24 font-normal text-white">Twoja sytuacja jest poważniejsza<br/>niż myślisz</h2>
  
  <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
    {#each challenges as challenge, index}
      <div class="relative pl-8 border-l border-white">
        <div>
          <h3 class="text-2xl font-bold mb-4 text-white font-['Haas']">{challenge.title}</h3>
          <p class="text-lg font-normal text-white/80 font-['Haas']">{challenge.description}</p>
        </div>
      </div>
    {/each}
  </div>
  
  <div class="mt-24 border-t border-white/20 pt-12">
    <p class="text-white text-xl md:text-3xl font-normal text-center">
      Z każdym dniem, kiedy zwlekasz z modernizacją swojego hotelu,<br/> 
      <span class="font-bold">tracisz tysiące złotych potencjalnych przychodów.</span>
    </p>
  </div>
</div> 