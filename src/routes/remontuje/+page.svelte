<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  
  // Steps data
  const steps = [
    {
      number: '01',
      title: 'Konsultacja i plan działania',
      description: 'Rozpoczynamy od dokładnego poznania Twoich oczekiwań. Analizujemy stan nieruchomości, omawiamy cele remontu (zwiększenie wartości przy sprzedaży lub poprawę komfortu mieszkania) i tworzymy wstępny plan działań.'
    },
    {
      number: '02',
      title: 'Analiza rynku i budżetowanie',
      description: 'Przeprowadzamy analizę lokalnego rynku, aby określić, które modernizacje przyniosą najlepszy zwrot z inwestycji. Pomagamy zaplanować budżet, który będzie optymalny zarówno dla właścicieli planujących sprzedaż, jak i dla tych, którzy remontują dla własnych potrzeb.'
    },
    {
      number: '03',
      title: 'Projekt i wizualizacja',
      description: 'Przygotowujemy profesjonalny projekt uwzględniający aktualne trendy i Twoje preferencje. Tworzymy wizualizacje, które pozwalają zobaczyć efekt końcowy przed rozpoczęciem prac, co jest szczególnie istotne przy remontach pod kątem przyszłej sprzedaży.'
    },
    {
      number: '04',
      title: 'Dobór materiałów i wykonawców',
      description: 'Pomagamy w wyborze wysokiej jakości materiałów w optymalnej relacji jakości do ceny. Współpracujemy ze sprawdzonymi wykonawcami, którzy gwarantują solidność i terminowość realizacji, niezależnie od skali remontu.'
    },
    {
      number: '05',
      title: 'Koordynacja i nadzór prac',
      description: 'Zajmujemy się kompleksową koordynacją wszystkich etapów remontu. Nadzorujemy wykonawców, dbamy o zgodność z projektem i reagujemy na bieżąco na wszelkie nieprzewidziane sytuacje, zapewniając Ci spokój podczas całego procesu.'
    },
    {
      number: '06',
      title: 'Kontrola jakości i odbiór',
      description: 'Przeprowadzamy szczegółową kontrolę jakości wykonanych prac. Dbamy o to, aby każdy element spełniał uzgodnione standardy, a wykończenie było perfekcyjne – co ma kluczowe znaczenie zarówno przy sprzedaży, jak i dla własnego komfortu.'
    },
    {
      number: '07',
      title: 'Finalizacja i doradztwo po remoncie',
      description: 'Po zakończeniu remontu oferujemy doradztwo w zakresie aranżacji wnętrz, a w przypadku nieruchomości na sprzedaż – profesjonalny home staging i strategię marketingową, która podkreśli wszystkie zalety odnowionej przestrzeni.'
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
       style="background-image: url('/cherwell6.avif'); 
              background-size: cover;
              background-position: center;
              
              transform-origin: center;">
    <div class="absolute inset-0 bg-black/20 z-10"></div>
    <div class="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center" >
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Remontuję nieruchomość</h1>
      <p class="text-xl md:text-2xl text-white max-w-3xl">Kompleksowe remonty dla zwiększenia wartości i komfortu</p>
    </div>
  </div>

  <!-- Blurb section -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <p class="text-lg mb-8 leading-relaxed">
          Podchodzimy do każdego remontu indywidualnie, niezależnie od tego, czy planujesz sprzedaż nieruchomości, czy remont dla własnego komfortu. Łączymy estetykę z funkcjonalnością, dbając o każdy detal, który podniesie wartość Twojej przestrzeni.
        </p>
        
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Jasna wycena całości</strong> – znasz całkowity koszt zakupu i wykończenia jeszcze przed decyzją.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Funkcjonalna przestrzeń </strong> – podpowiemy Ci np. że wyburzając jedną ścianę, zyskasz większą łazienkę lub lepszy układ salonu – i pokażemy to na wizualizacji.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Nowoczesne wykończenie</strong> – wnętrza zgodne z aktualnymi trendami i na lata.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Spokój i wygoda</strong> – zajmujemy się wszystkim: od znalezienia nieruchomości, przez formalności, projekt i remont, aż po przekazanie kluczy.</span>
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
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">JAK PRZEBIEGA PROCES REMONTU Z NAMI</h2>
      
      <div class="max-w-4xl mx-auto space-y-12 md:space-y-16">
        {#each steps as step}
          <div class="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
            <div class="text-4xl font-bold text-gray-400">
              {step.number}
            </div>
            <div>
              <h3 class="text-xl font-bold mb-3">{step.title}</h3>
              <p class="text-gray-800">{step.description}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div> 