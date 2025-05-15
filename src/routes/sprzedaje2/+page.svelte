<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  // Steps data
  const steps = [
    {
      number: '01',
      image: '/sp-1.png',
      title: 'Rozpoczynamy współpracę',
      description: 'Pierwszy kontakt to moment, w którym poznajemy Twoje oczekiwania i przedstawiamy, jak możemy Ci pomóc. Omawiamy strategię sprzedaży i dopasowujemy ją do Twojej nieruchomości.'
    },
    {
      number: '02',
      image: '/sp-2.png',
      title: 'Wycena i analiza rynku',
      description: 'Każda nieruchomość jest inna, dlatego przeprowadzamy dokładną analizę rynku i pomagamy ustalić najlepszą cenę, tak aby była konkurencyjna i atrakcyjna dla kupujących.'
    },
    {
      number: '03',
      image: '/sp-3.png',
      title: 'Profesjonalne przygotowanie nieruchomości',
      description: 'Aby Twoja oferta wyróżniała się na tle innych, zajmujemy się home stagingiem, wykonujemy profesjonalne zdjęcia i nagrania wideo, a w razie potrzeby także ujęcia z drona. Naszym celem jest maksymalne podkreślenie atutów mieszkania.'
    },
    {
      number: '04',
      image: '/sp-4.png',
      title: 'Skuteczna promocja',
      description: 'Publikujemy ofertę na kluczowych portalach nieruchomościowych, w mediach społecznościowych i korzystamy z niestandardowych metod promocji, aby dotrzeć do jak największej liczby potencjalnych nabywców.'
    },
    {
      number: '05',
      image: '/sp-5.png',
      title: 'Prezentacja mieszkania i negocjacje',
      description: 'Zajmujemy się organizacją pokazów nieruchomości i rozmowami z zainteresowanymi klientami. Prowadzimy negocjacje, aby uzyskać dla Ciebie jak najlepsze warunki sprzedaży.'
    },
    {
      number: '06',
      image: '/sp-6.png',
      title: 'Formalności i dokumenty',
      description: 'Pomagamy w skompletowaniu wszystkich niezbędnych dokumentów, wyjaśniamy formalności i zapewniamy pełne wsparcie na każdym etapie transakcji. Współpracujemy także z kancelariami prawnymi i notariuszami.'
    },
    {
      number: '07',
      image: '/sp-7.png',
      title: 'Finalizacja transakcji',
      description: 'Koordynujemy cały proces aż do podpisania aktu notarialnego i przekazania kluczy nowemu właścicielowi. Dbamy o to, aby wszystko przebiegło sprawnie i bezproblemowo.'
    }
  ];
</script>

<svelte:head>
  <title>Sprzedaję nieruchomość | Paket</title>
  <meta name="description" content="Profesjonalna sprzedaż nieruchomości z Paket. Bezpieczeństwo, lepsza prezentacja, skuteczna promocja, optymalna cena i pełna obsługa." />
</svelte:head>

<div class="relative">
  <Navbar />
  
  <!-- Hero section with rotated image -->
  <div class="relative h-[50vh] overflow-hidden" 
       style="background-image: url('/kwiaty.webp'); 
              background-size: cover;
              background-position: center;
              
              transform-origin: center;">
    <div class="absolute inset-0 bg-black/20 z-10"></div>
    <div class="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center" >
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Sprzedaję nieruchomość</h1>
      <p class="text-xl md:text-2xl text-white max-w-3xl">Profesjonalna sprzedaż w rękach ekspertów</p>
    </div>
  </div>

  <!-- Blurb section -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <p class="text-lg mb-8 leading-relaxed">
          Podchodzimy do każdej transakcji jak do własnej, jakby to była w tym momencie
          najważniejsza nieruchomość na świecie – z pełnym zaangażowaniem i dbałością o każdy
          szczegół.
        </p>
        
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Bezpieczeństwo</strong> – współpracujemy z działem prawnym.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Lepsza prezentacja</strong> – profesjonalny home staging, wysokiej jakości zdjęcia i filmy.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Skuteczna promocja</strong> – ogłaszamy ofertę na wielu kanałach, także niestandardowych, by
            dotrzeć do idealnego kupca.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Optymalna cena</strong> – precyzyjna wycena i negocjacje w Twoim interesie.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Pełna obsługa</strong> – zajmujemy się wszystkim, Ty masz spokój.</span>
          </li>
        </ul>
        
        <p class="text-lg font-medium">
          Najważniejszy jest wynik i satysfakcja – szybka i korzystna sprzedaż. Działamy od
          pierwszego kontaktu do finalizacji!
        </p>
      </div>
    </div>
  </section>

  <!-- Steps section -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">JAK PRZEBIEGA WSPÓŁPRACA Z NAMI</h2>
      
      <div class="max-w-4xl mx-auto space-y-12 md:space-y-16">
        {#each steps as step}
          <div class="grid md:grid-cols-[120px_1fr] gap-4 md:gap-8">
            <div class="flex items-center justify-center">
              <img src={step.image} alt={`Krok ${step.number}`} class="h-16 md:h-12 w-auto object-contain" />
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

<Footer /> 