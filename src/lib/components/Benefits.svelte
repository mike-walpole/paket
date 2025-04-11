<script>
  const benefits = [
    {
      title: 'Kompleksowa obsługa',
      description: 'Zapewniamy pełne wsparcie na każdym etapie - od wyboru nieruchomości, przez negocjacje, po finalizację transakcji. Z nami zakup lub sprzedaż mieszkania stanie się prostsza i bezpieczniejsza.'
    },
    {
      title: 'Doświadczenie i ekspertyza',
      description: 'Nasi doradcy posiadają wieloletnie doświadczenie na rynku nieruchomości. Znamy każdy zakątek miasta i pomożemy Ci znaleźć idealne miejsce do życia.'
    },
    {
      title: 'Bezpieczeństwo transakcji',
      description: 'Dbamy o Twoje interesy - weryfikujemy stan prawny nieruchomości, dokumentację i przeprowadzamy dokładną analizę rynku przed każdą transakcją.'
    },
    {
      title: 'Indywidualne podejście',
      description: 'Każdy klient jest dla nas wyjątkowy. Słuchamy Twoich potrzeb i proponujemy rozwiązania dopasowane do Twoich oczekiwań i budżetu.'
    }
  ];
</script>

<div class="px-4 sm:px-6 lg:px-8 py-24 bg-gray-100">
  <div class="mb-16">
    <h2 class="text-4xl md:text-5xl font-normal">Dlaczego warto wybrać Paket?</h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
    {#each benefits as benefit, index}
      <div class="flex">
        <div class="flex-shrink-0 pt-1">
          <div class="bg-red-900 rounded-full h-3 w-3"></div>
        </div>
        <div class="ml-4">
          <h3 class="text-xl font-medium mb-2">{benefit.title}</h3>
          <p class="text-gray-700">{benefit.description}</p>
        </div>
      </div>
    {/each}
  </div>
   
  <div class="mt-16 text-center">
    <a href="/o-nas" class="inline-flex items-center px-8 py-3 border border-red-900 text-base font-medium rounded-full bg-transparent hover:bg-red-900 hover:text-white transition-colors duration-200">
      Poznaj nasz zespół
    </a>
  </div>
</div> 