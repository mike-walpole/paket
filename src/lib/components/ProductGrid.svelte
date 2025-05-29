<script>
  const categories = [
    {
      title: 'Sprzedaję mieszkania',
      href: '/sprzedaje',
      description: 'Maksymalizujemy wartość Twojej nieruchomości dzięki strategicznemu podejściu do sprzedaży. Profesjonalny home staging, wysokiej jakości materiały marketingowe i skuteczne negocjacje gwarantują najlepszy wynik finansowy.',
      features: [
        'Strategiczna wycena oparta na głębokiej analizie rynku',
        'Profesjonalny home staging i fotografia nieruchomości',
        'Agresywny marketing i dotarcie do najlepszych kupujących'
      ]
    },
    {
      title: 'Kupuję mieszkania',
      href: '/kupuje',
      description: 'Znajdziemy dla Ciebie idealną nieruchomość, która spełni wszystkie Twoje oczekiwania i będzie doskonałą inwestycją na przyszłość. Nasze doświadczenie i znajomość rynku to gwarancja trafnego wyboru.',
      features: [
        'Ekskluzywny dostęp do najlepszych ofert na rynku',
        'Kompleksowa analiza prawna i techniczna nieruchomości',
        'Profesjonalne negocjacje ceny i warunków zakupu'
      ]
    },
    {
      title: 'Remontuję mieszkania',
      href: '/remontuje',
      description: 'Przekształcamy Twoją przestrzeń w nowoczesne, funkcjonalne wnętrze, które zwiększy wartość nieruchomości i komfort życia. Kompleksowa realizacja od projektu po ostatni detal wykończenia.',
      features: [
        'Autorskie projekty wnętrz dopasowane do Twoich potrzeb',
        'Koordinacja wszystkich prac z gwarancją terminowości',
        'Materiały premium w optymalnej relacji jakości do ceny'
      ]
    }
  ];
</script>

<div class="px-4 sm:px-6 lg:px-8 py-16">
  <div class="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
    {#each categories as category, index}
      <div class="group">
        <!-- Main Content -->
        <div class="pl-4 md:pl-8 border-l border-red-900">
          <!-- Title and Description -->
          <div class="mb-8">
            <h3 class="text-lg mb-4 font-bold">
             {category.title}
            </h3>
            <p class="text-lg leading-snug mb-24 h-[80px]">{category.description}</p>
          </div>

          <!-- Learn More Section -->
          <div class="flex items-center mb-6">
            <div class="w-2.5 h-2.5 rounded-full bg-red-900"></div>
            <a href={category.href} class="ml-2 text-xs text-gray-900 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 font-bold uppercase">
              Dowiedz się więcej
            </a>
          </div>

          <!-- Bottom Border with Gap -->
          <div class="border-t border-red-900 ml-0"></div>

          <!-- Feature List -->
          <div class="mt-6 space-y-6">
            {#each category.features as feature, i}
              <div class="pl-0 {i !== 0 ? 'border-t border-gray-200 pt-4' : ''}">
                <p class="text-base">{feature}</p>
              </div>
            {/each}
          </div>

          <!-- Contact Button -->
          <div class="mt-8 pl-0">
            <a 
              href="/kontakt" 
              class="inline-flex items-center px-6 py-2 border border-red-900 rounded-full text-sm font-normal hover:bg-red-900 hover:text-white transition-colors duration-200"
            >
              Umów spotkanie
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div> 