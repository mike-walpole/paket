<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import FormularzKup from '$lib/components/FormularzKup.svelte';
  // Steps data
  const steps = [
    {
      number: '01',
      title: 'Pierwsza rozmowa i określenie potrzeb',
      description: 'Na początku poznajemy Twoje oczekiwania. Określimy, jakiego mieszkania szukasz – lokalizacja, metraż, budżet i inne ważne szczegóły. Dopasujemy oferty do Twoich potrzeb.'
    },
    {
      number: '02',
      title: 'Prezentacja ofert dopasowanych do Ciebie',
      description: 'Na podstawie Twoich kryteriów przedstawiamy Ci mieszkania, które najlepiej odpowiadają Twoim wymaganiom. Każda oferta zawiera szczegółowe informacje, zdjęcia oraz pełen opis nieruchomości.'
    },
    {
      number: '03',
      title: 'Wizyty i oglądanie mieszkań',
      description: 'Umawiamy prezentacje wybranych mieszkań, dzięki czemu osobiście możesz ocenić, czy to odpowiednia opcja. Odpowiadamy na Twoje pytania i pomagamy w podjęciu decyzji.'
    },
    {
      number: '04',
      title: 'Negocjacje i doradztwo',
      description: 'Gdy znajdziesz wymarzone mieszkanie, zajmiemy się negocjacjami ceny oraz warunków transakcji, dbając o Twoje interesy.'
    },
    {
      number: '05',
      title: 'Sprawdzenie stanu prawnego nieruchomości',
      description: 'Zanim zdecydujesz się na zakup, sprawdzamy stan prawny nieruchomości, aby zapewnić Ci pełną pewność, że nie ma żadnych ukrytych problemów prawnych.'
    },
    {
      number: '06',
      title: 'Wsparcie przy formalnościach',
      description: 'Pomagamy w skompletowaniu wszelkich dokumentów, takich jak umowa przedwstępna, oraz zajmujemy się kontaktem z notariuszem, by proces zakupu przebiegł sprawnie i bez stresu.'
    },
    {
      number: '07',
      title: 'Finalizacja transakcji',
      description: 'Po podpisaniu umowy notarialnej przekazujemy Ci klucze do nowego mieszkania. Jeśli zdecydujesz się na usługi wykończenia, rozpoczynamy proces realizacji projektu, aby Twoje mieszkanie było gotowe do zamieszkania w najkrótszym możliwym czasie.'
    },
    {
      number: '08',
      title: 'Jeśli potrzebujesz remontu w swoim nowym mieszkaniu',
      description: 'Darmowa wycena wykończenia mieszkania. Doradzimy, przygotujemy wizualizację i przygotujemy kosztorys dopasowany do Twoich potrzeb. Od prac remontowych po umeblowanie – wszystko pod klucz.'
    }
  ];
</script>

<svelte:head>
  <title>Kupuję nieruchomość | Paket</title>
  <meta name="description" content="Profesjonalne wsparcie w zakupie nieruchomości z Paket. Znajdź wymarzone mieszkanie z pomocą ekspertów." />
</svelte:head>

<div class="relative">
  <Navbar />
  
  <!-- Hero section with rotated image -->
  <div class="relative h-[50vh] overflow-hidden" 
       style="background-image: url('/salon.png'); 
              background-size: cover;
              background-position: center;
              
              transform-origin: center;">
    <div class="absolute inset-0 bg-black/20 z-10"></div>
    <div class="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center" >
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Kupuję nieruchomość</h1>
      <p class="text-xl md:text-2xl text-white max-w-3xl">Znajdź swoje wymarzone miejsce z profesjonalnym wsparciem</p>
    </div>
  </div>

  <!-- Blurb section -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <p class="text-lg mb-8 leading-relaxed">
          Podchodzimy do zakupu Twojej nieruchomości z pełnym zaangażowaniem, jakby to był nasz własny dom.
          Pomagamy w znalezieniu idealnego mieszkania dopasowanego do Twoich potrzeb i oczekiwań.
        </p>
        
        <ul class="space-y-3 mb-8">
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Bezpieczeństwo</strong> – weryfikujemy stan prawny każdej nieruchomości.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Szeroki wybór</strong> – dostęp do wielu ofert, także spoza otwartego rynku.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Oszczędność czasu</strong> – prezentujemy tylko oferty zgodne z Twoimi kryteriami.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Korzystna cena</strong> – negocjujemy warunki zakupu w Twoim interesie.</span>
          </li>
          <li class="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-red-900 mr-2 mt-1 flex-shrink-0">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span><strong>Pełna obsługa</strong> – od wyszukania oferty po odbiór kluczy i wykończenie mieszkania.</span>
          </li>
        </ul>
        
        <p class="text-lg font-medium">
          Najważniejsza jest Twoja satysfakcja i pewność, że dokonałeś dobrego wyboru. Działamy od
          pierwszego kontaktu aż do wprowadzenia się do nowego mieszkania!
        </p>
      </div>
    </div>
  </section>

  <!-- Steps section -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">Jak przebiega współpraca z nami?</h2>
      
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 md:gap-12">
          {#each steps as step, index}
            <div class="step-item {steps.length % 2 !== 0 && index === steps.length - 1 ? 'md:col-span-2 md:max-w-md md:mx-auto' : ''}">
              <div class="grid grid-cols-[80px_1fr] gap-4">
                <div class="text-4xl font-bold text-gray-400 flex items-center justify-center">
                  {step.number}
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-3">{step.title}</h3>
                  <p class="text-gray-800">{step.description}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</div>
<FormularzKup />
<Footer /> 