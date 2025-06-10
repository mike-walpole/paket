<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer  from '$lib/components/Footer.svelte';
  import FormularzRemont from '$lib/components/FormularzRemont.svelte';
  // Steps data
  const steps = [
    {
      number: '01',
      title: 'Konsultacja i plan działania',
      description: 'Rozpoczynamy od dokładnego poznania Twoich oczekiwań. Analizujemy stan nieruchomości, omawiamy cele remontu (zwiększenie wartości przy sprzedaży lub poprawę komfortu mieszkania) i tworzymy wstępny plan działań.',
      icon: '/remont-1.avif'
    },
    {
      number: '02',
      title: 'Analiza rynku i budżetowanie',
      description: 'Przeprowadzamy analizę lokalnego rynku, aby określić, które modernizacje przyniosą najlepszy zwrot z inwestycji. Pomagamy zaplanować budżet, który będzie optymalny zarówno dla właścicieli planujących sprzedaż, jak i dla tych, którzy remontują dla własnych potrzeb.',
      icon: '/remont-2.avif'
    },
    {
      number: '03',
      title: 'Projekt i wizualizacja',
      description: 'Przygotowujemy profesjonalny projekt uwzględniający aktualne trendy i Twoje preferencje. Tworzymy wizualizacje, które pozwalają zobaczyć efekt końcowy przed rozpoczęciem prac, co jest szczególnie istotne przy remontach pod kątem przyszłej sprzedaży.',
      icon: '/remont-3.avif'
    },
    {
      number: '04',
      title: 'Dobór materiałów i wykonawców',
      description: 'Pomagamy w wyborze wysokiej jakości materiałów w optymalnej relacji jakości do ceny. Współpracujemy ze sprawdzonymi wykonawcami, którzy gwarantują solidność i terminowość realizacji, niezależnie od skali remontu.',
      icon: '/remont-4.avif'
    },
    {
      number: '05',
      title: 'Koordynacja i nadzór prac',
      description: 'Zajmujemy się kompleksową koordynacją wszystkich etapów remontu. Nadzorujemy wykonawców, dbamy o zgodność z projektem i reagujemy na bieżąco na wszelkie nieprzewidziane sytuacje, zapewniając Ci spokój podczas całego procesu.',
      icon: '/remont-5.avif'
    },
    {
      number: '06',
      title: 'Kontrola jakości i odbiór',
      description: 'Przeprowadzamy szczegółową kontrolę jakości wykonanych prac. Dbamy o to, aby każdy element spełniał uzgodnione standardy, a wykończenie było perfekcyjne – co ma kluczowe znaczenie zarówno przy sprzedaży, jak i dla własnego komfortu.',
      icon: '/remont-6.avif'
    },
    {
      number: '07',
      title: 'Finalizacja i doradztwo po remoncie',
      description: 'Po zakończeniu remontu oferujemy doradztwo w zakresie aranżacji wnętrz, a w przypadku nieruchomości na sprzedaż – profesjonalny home staging i strategię marketingową, która podkreśli wszystkie zalety odnowionej przestrzeni.',
      icon: '/remont-7.avif'
    }
  ];
</script>

<svelte:head>
  <title>Remontuję nieruchomość | Paket</title>
  <meta name="description" content="Profesjonalne remonty nieruchomości z Paket. Kompleksowa obsługa remontów pod sprzedaż oraz dla właścicieli planujących dalsze zamieszkanie." />
</svelte:head>

<div class="relative">
  <Navbar />
  
  <!-- Hero section with rotated image -->
  <div class="relative h-[33vh] overflow-hidden" 
       style="background-image: url('/wykonczenie.png'); 
              background-size: cover;
              background-position: center;
              
              transform-origin: center;">
    <div class="absolute inset-0 bg-black/20 z-10"></div>
    <div class="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center" >
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Wykończenie pod klucz</h1>
      <p class="text-xl md:text-2xl text-white max-w-3xl">Kompleksowo i na miarę.</p>
    </div>
  </div>

  <!-- Blurb section -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <p class="text-lg mb-8 leading-relaxed">
          Wykończenia realizujemy kompleksowo – z myślą o funkcjonalności, estetyce i trwałości. Każdy projekt oparty jest na analizie Twoich oczekiwań, stylu życia oraz realnych możliwości nieruchomości. To przemyślany proces który spełni Twoje oczekiwania. 
        </p>
        
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Kosztorys przed startem</strong> – transparentnie, bez niedomówień.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Funkcjonalny układ </strong> – doradzamy optymalne rozwiązania i pokazujemy je na wizualizacjach.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Dopasowane materiały i rozwiązania</strong> – zgodnie z celem: komfort mieszkania lub rentowność wynajmu.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Spójny proces od A do Z</strong> – projekt, logistyka, wykonanie, finalny odbiór.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Pełna personalizacja</strong> – wnętrze tworzone pod Ciebie, nie według schematu.</span>
          </li>
        </ul>
        
        <p class="text-lg font-medium">
          Efektywnie łączymy estetykę z pragmatyzmem, tworząc przestrzenie, które zachwycają i zwiększają wartość nieruchomości – zarówno dla przyszłych nabywców, jak i dla Ciebie.
        </p>
      </div>
    </div>
  </section>

  <!-- Steps section -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Image before steps -->
      <div class="max-w-6xl mx-auto mb-16">
        <img 
          src="/remontimage.png" 
          alt="Remont nieruchomości" 
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>
<!---tick boxes after the mid-page image-->
      <div class="max-w-4xl mx-auto mb-16">
        <h3 class="text-2xl md:text-3xl font-bold text-center mb-10">Co wchodzi w skład usługi?</h3>
        <ul class="space-y-4 text-lg">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-900 mr-3 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Projekt i wizualizacje</strong> – dopasowane do założeń funkcjonalnych i estetycznych</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-900 mr-3 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Kompleksowe wykonawstwo</strong> – pełna realizacja prac wykończeniowych</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-900 mr-3 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Montaż podłóg, drzwi, oświetlenia</strong> – kompletna aranżacja przestrzeni</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-900 mr-3 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Układanie glazury, malowanie ścian</strong> – z dbałością o każdy detal</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-900 mr-3 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Instalacje elektryczne i hydrauliczne</strong> – fachowe podejście, zgodne z normami</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-900 mr-3 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Meble na wymiar</strong> – kuchnie, szafy, zabudowy, stolarka dopasowana do wnętrza</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-red-900 mr-3 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Sprzątanie po zakończeniu</strong> – przestrzeń gotowa do zamieszkania</span>
          </li>
        </ul>
      </div>

      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Jak przebiega proces remontu z nami?</h2>
      
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
          {#each steps as step, index}
            <div class="step-item {steps.length % 2 !== 0 && index === steps.length - 1 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}">
              <div class="grid grid-cols-[120px_1fr] gap-6">
                <div class="flex items-start justify-center pt-2">
                  <img 
                    src={step.icon} 
                    alt={step.title}
                    class="w-20 h-20 object-contain"
                    on:error={(e) => {
                      // Fallback to number if image fails to load
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div class="text-4xl font-bold text-gray-400 items-center justify-center hidden">
                    {step.number}
                  </div>
                </div>
                <div class="pt-2">
                  <h3 class="text-xl font-bold mb-4">{step.title}</h3>
                  <p class="text-gray-800 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</div> 
<FormularzRemont />
<Footer />