<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import FormularzSp from '$lib/components/FormularzSp.svelte';
  
  // Steps data
  const steps = [
    {
      number: '01',
      image: '/sell-1.avif',
      title: 'Pierwsza rozmowa',
      description: 'Pierwszy kontakt to moment, w którym poznajemy Twoje oczekiwania i przedstawiamy, jak możemy Ci pomóc. Omawiamy strategię sprzedaży i dopasowujemy ją do Twojej nieruchomości.'
    },
    {
      number: '02',
      image: '/sell-2.avif',
      title: 'Wycena i analiza rynku',
      description: 'Każda nieruchomość jest inna, dlatego przeprowadzamy dokładną analizę rynku i pomagamy ustalić najlepszą cenę, tak aby była konkurencyjna i atrakcyjna dla kupujących.'
    },
    {
      number: '03',
      image: '/sell-3.avif',
      title: 'Profesjonalne przygotowanie nieruchomości',
      description: 'Aby Twoja oferta wyróżniała się na tle innych, zajmujemy się home stagingiem, wykonujemy profesjonalne zdjęcia i nagrania wideo, a w razie potrzeby także ujęcia z drona. Naszym celem jest maksymalne podkreślenie atutów mieszkania.'
    },
    {
      number: '04',
      image: '/sell-4.avif',
      title: 'Skuteczna promocja',
      description: 'Publikujemy ofertę na kluczowych portalach nieruchomościowych, w mediach społecznościowych i korzystamy z niestandardowych metod promocji, aby dotrzeć do jak największej liczby potencjalnych nabywców.'
    },
    {
      number: '05',
      image: '/sell-5.avif',
      title: 'Prezentacja mieszkania i negocjacje',
      description: 'Zajmujemy się organizacją pokazów nieruchomości i rozmowami z zainteresowanymi klientami. Prowadzimy negocjacje, aby uzyskać dla Ciebie jak najlepsze warunki sprzedaży.'
    },
    {
      number: '06',
      image: '/sell-6.avif',
      title: 'Formalności i dokumenty',
      description: 'Pomagamy w skompletowaniu wszystkich niezbędnych dokumentów, wyjaśniamy formalności i zapewniamy pełne wsparcie na każdym etapie transakcji. Współpracujemy także z kancelariami prawnymi i notariuszami.'
    },
    {
      number: '07',
      image: '/sell-7.avif',
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
       style="background-image: url('/sprzedaz.png'); 
              background-size: cover;
              background-position: center;
              
              transform-origin: center;">
    <div class="absolute inset-0 bg-black/20 z-10"></div>
    <div class="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center" >
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Chcę sprzedać nieruchomość</h1>
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
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Bezpieczeństwo transakcji</strong> – współpracujemy z działem prawnym.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Mocna prezentacja</strong> – home staging, zdjęcia, wideo, dron – robimy efekt „wow”.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Promocja z rozmachem</strong> – klasyczne i niestandardowe kanały, precyzyjny target.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Cena maksymalna</strong> – negocjujemy twardo, jak dla siebie.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Obsługa end-to-end</strong> – Ty odpoczywasz, my ogarniamy całość.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Liczy się efekt </strong> – szybka, pewna, dobrze wyceniona sprzedaż.</span>
          </li>

        </ul>
        
        <p class="text-lg font-medium">
          Najważniejszy jest wynik i satysfakcja – szybka i korzystna sprzedaż. Działamy od
          pierwszego kontaktu do finalizacji!
        </p>
      </div>
    </div>
  </section>

  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <img src="/sprzedaz1.avif" alt="Sprzedaję nieruchomość" class="w-full h-auto">
    </div>
  </section>

  <!-- Steps section -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">JAK PRZEBIEGA WSPÓŁPRACA Z NAMI</h2>
      
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
          {#each steps as step, index}
            <div class="step-item {steps.length % 2 !== 0 && index === steps.length - 1 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}">
              <div class="grid grid-cols-[120px_1fr] gap-6">
                <div class="flex items-start justify-center pt-2">
                  <img 
                    src={step.image} 
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
<FormularzSp />
<Footer /> 