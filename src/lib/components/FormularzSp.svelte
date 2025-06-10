<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  // Form data
  let formData = {
    imie: '',
    nazwisko: '',
    email: '',
    telefon: '',
    rodzajNieruchomosci: '',
    lokalizacja: '',
    powierzchnia: '',
    liczbaPokoi: 1,
    proponowanaCena: '',
    dodatkoweInformacje: '',
    zgodaPrzetwarzanie: false,
    zgodaMarketing: false
  };
  
  // Property type options
  const rodzajeNieruchomosci = [
    { value: '', label: 'Wybierz rodzaj nieruchomości' },
    { value: 'mieszkanie', label: 'Mieszkanie' },
    { value: 'dom', label: 'Dom' },
    { value: 'dzialka', label: 'Działka' },
    { value: 'lokal-uzytkowy', label: 'Lokal użytkowy' },
    { value: 'inne', label: 'Inne' }
  ];
  
  // Validation errors
  let errors = {};
  
  // Check if form can be submitted (both checkboxes must be checked)
  $: canSubmit = formData.zgodaPrzetwarzanie && formData.zgodaMarketing;
  
  // Loading state
  let isSubmitting = false;
  
  function incrementRooms() {
    formData.liczbaPokoi = Math.min(formData.liczbaPokoi + 1, 10);
  }
  
  function decrementRooms() {
    formData.liczbaPokoi = Math.max(formData.liczbaPokoi - 1, 1);
  }
  
  function validateForm() {
    errors = {};
    
    if (!formData.imie.trim()) errors.imie = 'Imię jest wymagane';
    if (!formData.nazwisko.trim()) errors.nazwisko = 'Nazwisko jest wymagane';
    if (!formData.email.trim()) errors.email = 'Adres e-mail jest wymagany';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Podaj prawidłowy adres e-mail';
    if (!formData.telefon.trim()) errors.telefon = 'Telefon kontaktowy jest wymagany';
    if (!formData.rodzajNieruchomosci) errors.rodzajNieruchomosci = 'Wybierz rodzaj nieruchomości';
    if (!formData.lokalizacja.trim()) errors.lokalizacja = 'Lokalizacja jest wymagana';
    if (!formData.powierzchnia || String(formData.powierzchnia).trim() === '') errors.powierzchnia = 'Powierzchnia jest wymagana';
    else if (isNaN(formData.powierzchnia) || parseFloat(formData.powierzchnia) <= 0) errors.powierzchnia = 'Podaj prawidłową powierzchnię';
    if (!formData.zgodaPrzetwarzanie) errors.zgodaPrzetwarzanie = 'Musisz wyrazić zgodę na przetwarzanie danych';
    
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
      const response = await fetch('/api/contact', {
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
          imie: '',
          nazwisko: '',
          email: '',
          telefon: '',
          rodzajNieruchomosci: '',
          lokalizacja: '',
          powierzchnia: '',
          liczbaPokoi: 1,
          proponowanaCena: '',
          dodatkoweInformacje: '',
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
          Chcesz sprzedać nieruchomość? Zróbmy to razem.
        </h2>
        <p class="text-lg text-gray-600">
          Wypełnij krótki formularz – bez zobowiązań sprawdzimy, co możemy dla Ciebie zrobić. Odpowiadamy w ciągu kilku godzin.
        </p>
      </div>
      
      <!-- Form -->
      <form on:submit={handleSubmit} class="space-y-6">
        <!-- Name fields row -->
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label for="imie" class="block text-sm font-medium text-gray-700 mb-2">
              Imię <span class="text-red-900">*</span>
            </label>
            <input
              type="text"
              id="imie"
              bind:value={formData.imie}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.imie ? 'border-red-500' : ''}"
              placeholder="Wpisz swoje imię"
            />
            {#if errors.imie}
              <p class="mt-1 text-sm text-red-900">{errors.imie}</p>
            {/if}
          </div>
          
          <div>
            <label for="nazwisko" class="block text-sm font-medium text-gray-700 mb-2">
              Nazwisko <span class="text-red-900">*</span>
            </label>
            <input
              type="text"
              id="nazwisko"
              bind:value={formData.nazwisko}
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.nazwisko ? 'border-red-500' : ''}"
              placeholder="Wpisz swoje nazwisko"
            />
            {#if errors.nazwisko}
              <p class="mt-1 text-sm text-red-900">{errors.nazwisko}</p>
            {/if}
          </div>
        </div>
        
        <!-- Contact fields row -->
        <div class="grid md:grid-cols-2 gap-4">
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
          
          <div>
            <label for="telefon" class="block text-sm font-medium text-gray-700 mb-2">
              Telefon kontaktowy <span class="text-red-900">*</span>
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
        </div>
        
        <!-- Property type -->
        <div>
          <label for="rodzajNieruchomosci" class="block text-sm font-medium text-gray-700 mb-2">
            Rodzaj nieruchomości <span class="text-red-900">*</span>
          </label>
          <select
            id="rodzajNieruchomosci"
            bind:value={formData.rodzajNieruchomosci}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.rodzajNieruchomosci ? 'border-red-500' : ''}"
          >
            {#each rodzajeNieruchomosci as option}
              <option value={option.value}>{option.label}</option>
            {/each}
          </select>
          {#if errors.rodzajNieruchomosci}
            <p class="mt-1 text-sm text-red-900">{errors.rodzajNieruchomosci}</p>
          {/if}
        </div>
        
        <!-- Location -->
        <div>
          <label for="lokalizacja" class="block text-sm font-medium text-gray-700 mb-2">
            Lokalizacja (Miasto, dzielnica, ulica) <span class="text-red-900">*</span>
          </label>
          <input
            type="text"
            id="lokalizacja"
            bind:value={formData.lokalizacja}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.lokalizacja ? 'border-red-500' : ''}"
            placeholder="np. Warszawa, Mokotów, ul. Przykładowa 123"
          />
          {#if errors.lokalizacja}
            <p class="mt-1 text-sm text-red-900">{errors.lokalizacja}</p>
          {/if}
        </div>
        
        <!-- Surface area and rooms -->
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label for="powierzchnia" class="block text-sm font-medium text-gray-700 mb-2">
              Powierzchnia (m²) <span class="text-red-900">*</span>
            </label>
            <input
              type="number"
              id="powierzchnia"
              bind:value={formData.powierzchnia}
              min="1"
              step="0.01"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.powierzchnia ? 'border-red-500' : ''}"
              placeholder="np. 65.5"
            />
            {#if errors.powierzchnia}
              <p class="mt-1 text-sm text-red-900">{errors.powierzchnia}</p>
            {/if}
          </div>
          
          <div>
            <label for="liczbaPokoi" class="block text-sm font-medium text-gray-700 mb-2">
              Liczba pokoi
            </label>
            <div class="flex items-center space-x-2">
              <button
                type="button"
                on:click={decrementRooms}
                class="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-900"
                disabled={formData.liczbaPokoi <= 1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
                </svg>
              </button>
              
              <input
                type="number"
                id="liczbaPokoi"
                bind:value={formData.liczbaPokoi}
                min="1"
                max="10"
                class="w-20 px-3 py-2 border border-gray-300 rounded-md text-center focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                readonly
              />
              
              <button
                type="button"
                on:click={incrementRooms}
                class="w-10 h-10 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-900"
                disabled={formData.liczbaPokoi >= 10}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        <!-- Proposed price -->
        <div>
          <label for="proponowanaCena" class="block text-sm font-medium text-gray-700 mb-2">
            Proponowana cena (opcjonalnie)
          </label>
          <input
            type="text"
            id="proponowanaCena"
            bind:value={formData.proponowanaCena}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
            placeholder="np. 450 000 PLN"
          />
        </div>
        
        <!-- Additional information -->
        <div>
          <label for="dodatkoweInformacje" class="block text-sm font-medium text-gray-700 mb-2">
            Dodatkowe informacje o nieruchomości
          </label>
          <textarea
            id="dodatkoweInformacje"
            bind:value={formData.dodatkoweInformacje}
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
            placeholder="np. stan techniczny, rok budowy, balkon, ogród, piętro, parking, itp."
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
              Wyrażam zgodę na przetwarzanie moich danych osobowych przez Paket Invest Sp. z o.o., właściciela marki Paket Nieruchomości, w celu odpowiedzi na przesłane zapytanie, zgodnie z <a href="/polityka-prywatnosci" class="underline">polityką prywatności</a>
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
              Wyrażam zgodę na otrzymywanie od Paket Invest Sp. z.o.o właściciela marki Paket Nieruchomości informacji handlowych drogą elektroniczną (e-mail, SMS, telefon)
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