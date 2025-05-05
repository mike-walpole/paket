<script>
  import { onMount } from 'svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
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
       style="background-image: url('/cherwell6.avif'); 
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
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Bezpieczeństwo</strong> – weryfikujemy stan prawny każdej nieruchomości.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Szeroki wybór</strong> – dostęp do wielu ofert, także spoza otwartego rynku.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Oszczędność czasu</strong> – prezentujemy tylko oferty zgodne z Twoimi kryteriami.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
            <span><strong>Korzystna cena</strong> – negocjujemy warunki zakupu w Twoim interesie.</span>
          </li>
          <li class="flex items-start">
            <span class="text-green-600 mr-2 mt-1">✅</span>
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
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-16">JAK PRZEBIEGA WSPÓŁPRACA Z NAMI</h2>
      
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

<Footer /> 