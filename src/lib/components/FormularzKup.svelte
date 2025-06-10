<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  // Form data
  let formData = {
    imieNazwisko: '',
    telefon: '',
    email: '',
    typNieruchomosci: '',
    lokalizacja: '',
    powierzchniaOd: '',
    powierzchniaDo: '',
    liczbaPokoi: '',
    stanWykonczenia: '',
    budzet: '',
    dodatkoweUwagi: '',
    zgodaPrzetwarzanie: false,
    zgodaMarketing: false
  };
  
  // Property type options
  const typyNieruchomosci = [
    { value: '', label: 'Wybierz typ nieruchomości' },
    { value: 'mieszkanie', label: 'Mieszkanie' },
    { value: 'dom', label: 'Dom' },
    { value: 'dzialka', label: 'Działka' },
    { value: 'lokal-uslugowy', label: 'Lokal usługowy' }
  ];
  
  // Room count options
  const liczbaPokojOptions = [
    { value: '', label: 'Wybierz liczbę pokoi' },
    { value: '1', label: '1 pokój' },
    { value: '2', label: '2 pokoje' },
    { value: '3', label: '3 pokoje' },
    { value: '4', label: '4 pokoje' },
    { value: '5', label: '5 pokoi' },
    { value: '6', label: '6 pokoi' },
    { value: '7', label: '7 pokoi' },
    { value: '8', label: '8 pokoi' }
  ];
  
  // Finishing state options
  const stanyWykonczenia = [
    { value: '', label: 'Wybierz stan wykończenia' },
    { value: 'gotowe-do-zamieszkania', label: 'Gotowe do zamieszkania' },
    { value: 'do-remontu', label: 'Do remontu' },
    { value: 'stan-deweloperski', label: 'Stan deweloperski' }
  ];
  
  // Validation errors
  let errors = {};
  
  // Check if form can be submitted (both checkboxes must be checked)
  $: canSubmit = formData.zgodaPrzetwarzanie && formData.zgodaMarketing;
  
  // Loading state
  let isSubmitting = false;
  
  function validateForm() {
    errors = {};
    
    if (!formData.imieNazwisko.trim()) errors.imieNazwisko = 'Imię i nazwisko jest wymagane';
    if (!formData.telefon.trim()) errors.telefon = 'Numer telefonu jest wymagany';
    if (!formData.email.trim()) errors.email = 'Adres e-mail jest wymagany';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Podaj prawidłowy adres e-mail';
    if (!formData.zgodaPrzetwarzanie) errors.zgodaPrzetwarzanie = 'Musisz wyrazić zgodę na przetwarzanie danych';
    
    // Validate surface area range if provided
    if (formData.powierzchniaOd && formData.powierzchniaDo) {
      const od = parseFloat(formData.powierzchniaOd);
      const doo = parseFloat(formData.powierzchniaDo);
      if (od >= doo) {
        errors.powierzchnia = 'Powierzchnia "od" musi być mniejsza niż "do"';
      }
    }
    
    return Object.keys(errors).length === 0;
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    
    if (validateForm() && !isSubmitting) {
      submitForm();
    }
  }
  
  async function submitForm() {
    isSubmitting = true;
    
    try {
      const response = await fetch('/api/contact-buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Success - reset form and show success message
        formData = {
          imieNazwisko: '',
          telefon: '',
          email: '',
          typNieruchomosci: '',
          lokalizacja: '',
          powierzchniaOd: '',
          powierzchniaDo: '',
          liczbaPokoi: '',
          stanWykonczenia: '',
          budzet: '',
          dodatkoweUwagi: '',
          zgodaPrzetwarzanie: false,
          zgodaMarketing: false
        };
        errors = {};
        
        alert('Formularz został wysłany pomyślnie! Skontaktujemy się z Tobą wkrótce.');
        dispatch('submit', result);
      } else {
        throw new Error(result.error || 'Wystąpił błąd podczas wysyłania formularza');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.');
    } finally {
      isSubmitting = false;
    }
  }
</script>

<div class="bg-white py-16 md:py-24">
  <div class="container mx-auto px-4">
    <div class="max-w-2xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Szukasz nieruchomości? Pomożemy Ci ją znaleźć.
        </h2>
        <p class="text-lg text-gray-600">
          Powiedz nam, czego szukasz – bez zobowiązań sprawdzimy, co możemy dla Ciebie zrobić. Odpowiadamy w ciągu kilku godzin.
        </p>
      </div>
      
      <!-- Form -->
      <form on:submit={handleSubmit} class="space-y-6">
        <!-- Contact information -->
        <div>
          <label for="imieNazwisko" class="block text-sm font-medium text-gray-700 mb-2">
            Imię i nazwisko <span class="text-red-900">*</span>
          </label>
          <input
            type="text"
            id="imieNazwisko"
            bind:value={formData.imieNazwisko}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.imieNazwisko ? 'border-red-500' : ''}"
            placeholder="Wpisz swoje imię i nazwisko"
          />
          {#if errors.imieNazwisko}
            <p class="mt-1 text-sm text-red-900">{errors.imieNazwisko}</p>
          {/if}
        </div>
        
        <!-- Contact fields row -->
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label for="telefon" class="block text-sm font-medium text-gray-700 mb-2">
              Numer telefonu <span class="text-red-900">*</span>
            </label>
            <input
              type="tel"
              id="telefon"
              bind:value={formData.telefon}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.telefon ? 'border-red-500' : ''}"
              placeholder="+48 123 456 789"
            />
            {#if errors.telefon}
              <p class="mt-1 text-sm text-red-900">{errors.telefon}</p>
            {/if}
          </div>
          
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
              Adres e-mail <span class="text-red-900">*</span>
            </label>
            <input
              type="email"
              id="email"
              bind:value={formData.email}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.email ? 'border-red-500' : ''}"
              placeholder="twoj@email.com"
            />
            {#if errors.email}
              <p class="mt-1 text-sm text-red-900">{errors.email}</p>
            {/if}
          </div>
        </div>
        
        <!-- Property type -->
        <div>
          <label for="typNieruchomosci" class="block text-sm font-medium text-gray-700 mb-2">
            Typ nieruchomości
          </label>
          <select
            id="typNieruchomosci"
            bind:value={formData.typNieruchomosci}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
          >
            {#each typyNieruchomosci as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
        </div>
        
        <!-- Location -->
        <div>
          <label for="lokalizacja" class="block text-sm font-medium text-gray-700 mb-2">
            Lokalizacja (miasto / dzielnica)
          </label>
          <input
            type="text"
            id="lokalizacja"
            bind:value={formData.lokalizacja}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
            placeholder="np. Warszawa, Mokotów"
          />
        </div>
        
        <!-- Surface area range -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">
            Powierzchnia (m²)
          </label>
          <div class="grid grid-cols-[1fr_auto_1fr] gap-2 items-center">
            <input
              type="number"
              id="powierzchniaOd"
              bind:value={formData.powierzchniaOd}
              min="1"
              step="0.1"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.powierzchnia ? 'border-red-500' : ''}"
              placeholder="od"
            />
            <span class="text-gray-500 text-sm">—</span>
            <input
              type="number"
              id="powierzchniaDo"
              bind:value={formData.powierzchniaDo}
              min="1"
              step="0.1"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.powierzchnia ? 'border-red-500' : ''}"
              placeholder="do"
            />
          </div>
          {#if errors.powierzchnia}
            <p class="mt-1 text-sm text-red-900">{errors.powierzchnia}</p>
          {/if}
        </div>
        
        <!-- Room count and finishing state -->
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label for="liczbaPokoi" class="block text-sm font-medium text-gray-700 mb-2">
              Liczba pokoi
            </label>
            <select
              id="liczbaPokoi"
              bind:value={formData.liczbaPokoi}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
            >
              {#each liczbaPokojOptions as option}
                <option value={option.value}>{option.label}</option>
              {/each}
            </select>
          </div>
          
          <div>
            <label for="stanWykonczenia" class="block text-sm font-medium text-gray-700 mb-2">
              Stan wykończenia
            </label>
            <select
              id="stanWykonczenia"
              bind:value={formData.stanWykonczenia}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
            >
              {#each stanyWykonczenia as option}
                <option value={option.value}>{option.label}</option>
              {/each}
            </select>
          </div>
        </div>
        
        <!-- Budget -->
        <div>
          <label for="budzet" class="block text-sm font-medium text-gray-700 mb-2">
            Budżet (PLN)
          </label>
          <input
            type="text"
            id="budzet"
            bind:value={formData.budzet}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
            placeholder="np. 500 000 PLN lub max 600 000 PLN"
          />
        </div>
        
        <!-- Additional notes -->
        <div>
          <label for="dodatkoweUwagi" class="block text-sm font-medium text-gray-700 mb-2">
            Dodatkowe uwagi / preferencje
          </label>
          <textarea
            id="dodatkoweUwagi"
            bind:value={formData.dodatkoweUwagi}
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
            placeholder="np. preferowana lokalizacja, wymagania specjalne, oczekiwania czasowe..."
          ></textarea>
        </div>
        
        <!-- Consent checkboxes -->
        <div class="space-y-4">
          <div class="flex items-start">
            <input
              type="checkbox"
              id="zgodaPrzetwarzanie"
              bind:checked={formData.zgodaPrzetwarzanie}
              class="mt-1 h-4 w-4 text-red-900 focus:ring-red-900 border-gray-300 rounded"
            />
            <label for="zgodaPrzetwarzanie" class="ml-2 block text-sm text-gray-700">
              <span class="text-red-900">*</span>
              Wyrażam zgodę na przetwarzanie moich danych osobowych przez Paket Invest Sp. z o.o., właściciela marki Paket Nieruchomości, w celu odpowiedzi na przesłane zapytanie, zgodnie z <a href="/polityka-prywatnosci" class="underline">polityką prywatności</a>.
            </label>
          </div>
          {#if errors.zgodaPrzetwarzanie}
            <p class="text-sm text-red-900">{errors.zgodaPrzetwarzanie}</p>
          {/if}
          
          <div class="flex items-start">
            <input
              type="checkbox"
              id="zgodaMarketing"
              bind:checked={formData.zgodaMarketing}
              class="mt-1 h-4 w-4 text-red-900 focus:ring-red-900 border-gray-300 rounded"
            />
            <label for="zgodaMarketing" class="ml-2 block text-sm text-gray-700">
              <span class="text-red-900">*</span>
              Wyrażam zgodę na otrzymywanie od Paket Invest Sp. z.o.o właściciela marki Paket Nieruchomości informacji handlowych i ofert nieruchomości drogą elektroniczną (e-mail, SMS, telefon)
            </label>
          </div>
        </div>
        
        <!-- Submit button -->
        <div class="pt-4">
          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            class="w-full py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-200 font-medium {canSubmit && !isSubmitting
              ? 'bg-red-900 text-white hover:bg-red-800 focus:ring-red-900' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'}"
          >
            {#if isSubmitting}
              <div class="flex items-center justify-center">
                <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Wysyłanie...
              </div>
            {:else}
              Wyślij formularz
            {/if}
          </button>
        </div>
      </form>
    </div>
  </div>
</div> 