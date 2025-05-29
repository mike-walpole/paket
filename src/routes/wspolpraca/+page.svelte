<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>Współpraca | Paket</title>
  <meta name="description" content="Dołącz do sieci partnerów Paket. Współpracujemy z wykonawcami, architektami wnętrz i deweloperami. Rozwijaj swój biznes z liderem rynku nieruchomości." />
</svelte:head>

<div class="relative">
  <Navbar />
  
  <!-- Hero section -->
  <div class="relative h-[60vh] overflow-hidden" 
       style="background-image: url('/cherwell6.avif'); 
              background-size: cover;
              background-position: center;">
    <div class="absolute inset-0 bg-black/40 z-10"></div>
    <div class="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Współpraca</h1>
      <p class="text-xl md:text-2xl text-white max-w-4xl mb-8">Dołącz do sieci najlepszych profesjonalistów w branży nieruchomości</p>
      <a
        href="#formularz"
        class="inline-flex items-center px-8 py-4 bg-red-900 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200 text-lg"
      >
        Rozpocznij współpracę
      </a>
    </div>
  </div>

  <!-- Introduction -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Budujemy przyszłość razem</h2>
        <p class="text-lg mb-8 leading-relaxed">
          W Paket wierzymy, że najlepsze rezultaty osiągamy poprzez współpracę z najlepszymi. Poszukujemy partnerów, którzy podzielają nasze wartości: jakość, profesjonalizm i orientację na klienta. Jeśli jesteś wykonawcą, architektem wnętrz lub deweloperem – chcemy Cię poznać.
        </p>
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="text-center">
            <div class="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Stabilne zlecenia</h3>
            <p>Regularne projekty i przewidywalne przychody dzięki naszej rosnącej bazie klientów.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Profesjonalne wsparcie</h3>
            <p>Kompleksowa obsługa biznesowa i marketingowa. My zajmujemy się klientem, Ty skupiasz się na swojej specjalizacji.</p>
          </div>
          
          <div class="text-center">
            <div class="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Rozwój biznesu</h3>
            <p>Dostęp do ekskluzywnych projektów, szkoleń i sieci kontaktów w branży premium.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Target groups -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Kogo poszukujemy?</h2>
        
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Contractors -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="mb-6">
              <svg class="w-12 h-12 text-red-900 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2v0a2 2 0 01-2-2v-5H14a2 2 0 01-2-2V7z"></path>
              </svg>
              <h3 class="text-2xl font-bold mb-4">Wykonawcy</h3>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Firma remontowo-budowlana z minimum 3-letnim doświadczeniem</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Udokumentowane referencje i portfolio zrealizowanych projektów</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Ubezpieczenie OC i gwarancja na wykonane prace</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Zespół wykwalifikowanych specjalistów</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Elastyczność w harmonogramach i dostępność</span>
              </li>
            </ul>
            <p class="text-gray-600">
              Oferujemy regularne zlecenia na remonty mieszkań, domów oraz obiektów komercyjnych w segmencie premium.
            </p>
          </div>
          
          <!-- Interior Designers -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="mb-6">
              <svg class="w-12 h-12 text-red-900 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <h3 class="text-2xl font-bold mb-4">Architekci wnętrz</h3>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Wykształcenie kierunkowe lub udokumentowane doświadczenie</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Portfolio różnorodnych projektów mieszkaniowych</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Znajomość trendów i materiałów wykończeniowych</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Umiejętność pracy z różnymi stylami i budżetami</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Kompetencje komunikacyjne i współpracy z klientem</span>
              </li>
            </ul>
            <p class="text-gray-600">
              Współpracuj przy projektach aranżacji dla naszych klientów – od małych mieszkań po luksusowe penthouse'y.
            </p>
          </div>
          
          <!-- Developers -->
          <div class="bg-white rounded-lg shadow-lg p-8">
            <div class="mb-6">
              <svg class="w-12 h-12 text-red-900 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <h3 class="text-2xl font-bold mb-4">Deweloperzy</h3>
            </div>
            <ul class="space-y-3 mb-6">
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Doświadczenie w realizacji projektów mieszkaniowych</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Solidna sytuacja finansowa i zabezpieczenia</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Orientacja na jakość i terminowość realizacji</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Transparentność w procesach i komunikacji</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Innowacyjne podejście do projektów</span>
              </li>
            </ul>
            <p class="text-gray-600">
              Współtwórzmy przyszłość rynku nieruchomości poprzez ekskluzywne projekty developerskie.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Co zyskujesz współpracując z Paket?</h2>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Stały strumień zleceń</h4>
                <p class="text-gray-600">Dzięki naszej rosnącej bazie klientów zapewniamy regularną pracę i przewidywalne przychody.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Marketing i promocja</h4>
                <p class="text-gray-600">Twoje usługi promowane są w naszych kanałach komunikacji. Zyskujesz rozpoznawalność bez dodatkowych kosztów.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Konkurencyjne warunki finansowe</h4>
                <p class="text-gray-600">Atrakcyjne stawki i terminowe płatności. Przejrzyste warunki współpracy bez ukrytych kosztów.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Wsparcie operacyjne</h4>
                <p class="text-gray-600">Pomoc w logistyce, koordynacji projektów i rozwiązywaniu problemów technicznych.</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Szkolenia i rozwój</h4>
                <p class="text-gray-600">Dostęp do warsztatów, szkoleń branżowych i nowinek technologicznych.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Networking</h4>
                <p class="text-gray-600">Kontakty z innymi profesjonalistami z branży i możliwości współpracy przy większych projektach.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Prestiż marki</h4>
                <p class="text-gray-600">Związanie z rozpoznawalną marką Paket zwiększa Twój prestiż i wiarygodność na rynku.</p>
              </div>
            </div>
            
            <div class="flex items-start">
              <div class="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Elastyczność współpracy</h4>
                <p class="text-gray-600">Dostosowujemy formy współpracy do Twoich możliwości i preferencji biznesowych.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Process -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Jak wygląda proces współpracy?</h2>
        
        <div class="space-y-8">
          <div class="flex items-start">
            <div class="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <span class="text-white font-bold text-lg">1</span>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2">Zgłoszenie i weryfikacja</h4>
              <p class="text-gray-600">Wypełnij formularz zgłoszeniowy. Nasz zespół przeanalizuje Twoje doświadczenie, portfolio i referencje.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <span class="text-white font-bold text-lg">2</span>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2">Spotkanie kwalifikacyjne</h4>
              <p class="text-gray-600">Zapraszamy na spotkanie, gdzie omawiamy szczegóły współpracy, standardy jakości i warunki finansowe.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <span class="text-white font-bold text-lg">3</span>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2">Projekt testowy</h4>
              <p class="text-gray-600">Realizujesz pierwszy, mniejszy projekt, który pozwala nam poznać Twój styl pracy i standard usług.</p>
            </div>
          </div>
          
          <div class="flex items-start">
            <div class="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
              <span class="text-white font-bold text-lg">4</span>
            </div>
            <div>
              <h4 class="text-xl font-semibold mb-2">Długoterminowa współpraca</h4>
              <p class="text-gray-600">Po udanym projekcie testowym podpisujemy umowę o współpracy i rozpoczynamy regularne zlecenia.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact form -->
  <section id="formularz" class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">Dołącz do naszej sieci partnerów</h2>
        <p class="text-lg text-center mb-12 text-gray-600">
          Wypełnij formularz zgłoszeniowy, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.
        </p>
        
        <form class="space-y-6">
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-sm font-medium text-gray-700 mb-2">Imię *</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
              />
            </div>
            <div>
              <label for="lastName" class="block text-sm font-medium text-gray-700 mb-2">Nazwisko *</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
              />
            </div>
          </div>
          
          <div>
            <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Nazwa firmy *</label>
            <input
              type="text"
              id="company"
              name="company"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
            />
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
              />
            </div>
            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
              />
            </div>
          </div>
          
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700 mb-2">Branża *</label>
            <select
              id="category"
              name="category"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
            >
              <option value="">Wybierz branżę</option>
              <option value="contractor">Wykonawca remontowo-budowlany</option>
              <option value="interior">Architekt wnętrz / Designer</option>
              <option value="developer">Deweloper</option>
              <option value="other">Inna</option>
            </select>
          </div>
          
          <div>
            <label for="experience" class="block text-sm font-medium text-gray-700 mb-2">Doświadczenie (lata)</label>
            <input
              type="number"
              id="experience"
              name="experience"
              min="0"
              max="50"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
            />
          </div>
          
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 mb-2">Opis działalności</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              placeholder="Opisz krótko swoją działalność, specjalizację i najważniejsze doświadczenia..."
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
            ></textarea>
          </div>
          
          <div>
            <label for="portfolio" class="block text-sm font-medium text-gray-700 mb-2">Link do portfolio/strony www</label>
            <input
              type="url"
              id="portfolio"
              name="portfolio"
              placeholder="https://"
              class="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
            />
          </div>
          
          <div class="flex items-start">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              class="w-5 h-5 text-red-900 border border-gray-300 rounded focus:ring-red-900 mt-1"
            />
            <label for="consent" class="ml-3 text-sm text-gray-600">
              Wyrażam zgodę na przetwarzanie moich danych osobowych w celu nawiązania współpracy z firmą Paket. *
            </label>
          </div>
          
          <button
            type="submit"
            class="w-full bg-red-900 text-white py-4 px-6 rounded-md hover:bg-red-700 transition-colors duration-200 font-medium text-lg"
          >
            Wyślij zgłoszenie
          </button>
        </form>
      </div>
    </div>
  </section>

  <!-- FAQ or testimonials from partners could go here -->
</div>

<Footer /> 