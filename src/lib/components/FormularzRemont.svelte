<script>
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();
  
  // Form data
  let formData = {
    imie: '',
    nazwisko: '',
    telefon: '',
    email: '',
    lokalizacja: '',
    wykonczeniedeweloperski: false,
    remontwtorny: false,
    zabudowameblowa: false,
    projektlokalu: false,
    inne: false,
    inneopis: '',
    zakupzwykończeniem: false,
    dodatkoweInformacje: '',
    zgodaPrzetwarzanie: false,
    zgodaMarketing: false
  };
  
  // Validation errors
  let errors = {};
  
  // Check if form can be submitted (both checkboxes must be checked)
  $: canSubmit = formData.zgodaPrzetwarzanie && formData.zgodaMarketing;
  
  // Loading state
  let isSubmitting = false;
  
  // Show/hide "inne" text field based on checkbox
  $: if (!formData.inne) {
    formData.inneopis = '';
  }
  
  function validateForm() {
    errors = {};
    
    if (!formData.imie.trim()) errors.imie = 'Imię jest wymagane';
    if (!formData.nazwisko.trim()) errors.nazwisko = 'Nazwisko jest wymagane';
    if (!formData.telefon.trim()) errors.telefon = 'Numer telefonu jest wymagany';
    if (!formData.email.trim()) errors.email = 'Adres e-mail jest wymagany';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Podaj prawidłowy adres e-mail';
    if (!formData.lokalizacja.trim()) errors.lokalizacja = 'Lokalizacja nieruchomości jest wymagana';
    if (!formData.zgodaPrzetwarzanie) errors.zgodaPrzetwarzanie = 'Musisz wyrazić zgodę na przetwarzanie danych';
    
    // Check if "Inne" is selected but no description provided
    if (formData.inne && !formData.inneopis.trim()) {
      errors.inneopis = 'Opisz czym się interesujesz';
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
      const response = await fetch('/api/contact-renovation', {
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
          telefon: '',
          email: '',
          lokalizacja: '',
          wykonczeniedeweloperski: false,
          remontwtorny: false,
          zabudowameblowa: false,
          projektlokalu: false,
          inne: false,
          inneopis: '',
          zakupzwykończeniem: false,
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
          Planujesz remont albo wykończenie lokalu?
        </h2>
        <p class="text-lg text-gray-600">
          Wypełnij formularz – przygotujemy wstępną wycenę lub zaproponujemy spotkanie, żeby omówić konkretne szczegóły.
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
        
        <!-- Location -->
        <div>
          <label for="lokalizacja" class="block text-sm font-medium text-gray-700 mb-2">
            Lokalizacja nieruchomości <span class="text-red-900">*</span>
          </label>
          <input
            type="text"
            id="lokalizacja"
            bind:value={formData.lokalizacja}
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.lokalizacja ? 'border-red-500' : ''}"
            placeholder="np. Poznań, Grunwald, ul. Przykładowa 123"
          />
          {#if errors.lokalizacja}
            <p class="mt-1 text-sm text-red-900">{errors.lokalizacja}</p>
          {/if}
        </div>
        
        <!-- Services checkboxes -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-4">
            Interesuje mnie: <span class="text-gray-500">(można zaznaczyć wiele opcji)</span>
          </label>
          <div class="space-y-3">
            <div class="flex items-start">
              <input
                type="checkbox"
                id="wykonczeniedeweloperski"
                bind:checked={formData.wykonczeniedeweloperski}
                class="mt-1 h-4 w-4 text-red-900 focus:ring-red-900 border-gray-300 rounded"
              />
              <label for="wykonczeniedeweloperski" class="ml-2 block text-sm text-gray-700">
                Wykończenie lokalu w stanie deweloperskim
              </label>
            </div>
            
            <div class="flex items-start">
              <input
                type="checkbox"
                id="remontwtorny"
                bind:checked={formData.remontwtorny}
                class="mt-1 h-4 w-4 text-red-900 focus:ring-red-900 border-gray-300 rounded"
              />
              <label for="remontwtorny" class="ml-2 block text-sm text-gray-700">
                Remont lokalu z rynku wtórnego
              </label>
            </div>
            
            <div class="flex items-start">
              <input
                type="checkbox"
                id="zabudowameblowa"
                bind:checked={formData.zabudowameblowa}
                class="mt-1 h-4 w-4 text-red-900 focus:ring-red-900 border-gray-300 rounded"
              />
              <label for="zabudowameblowa" class="ml-2 block text-sm text-gray-700">
                Zabudowa meblowa (kuchnia, szafy itd.)
              </label>
            </div>
            
            <div class="flex items-start">
              <input
                type="checkbox"
                id="projektlokalu"
                bind:checked={formData.projektlokalu}
                class="mt-1 h-4 w-4 text-red-900 focus:ring-red-900 border-gray-300 rounded"
              />
              <label for="projektlokalu" class="ml-2 block text-sm text-gray-700">
                Projekt lokalu (wizualizacje, aranżacja)
              </label>
            </div>
            
            <div class="flex items-start">
              <input
                type="checkbox"
                id="zakupzwykończeniem"
                bind:checked={formData.zakupzwykończeniem}
                class="mt-1 h-4 w-4 text-red-900 focus:ring-red-900 border-gray-300 rounded"
              />
              <label for="zakupzwykończeniem" class="ml-2 block text-sm text-gray-700">
                Zakup nieruchomości z wykończeniem pod klucz
              </label>
            </div>
            
            <div class="flex items-start">
              <input
                type="checkbox"
                id="inne"
                bind:checked={formData.inne}
                class="mt-1 h-4 w-4 text-red-900 focus:ring-red-900 border-gray-300 rounded"
              />
              <label for="inne" class="ml-2 block text-sm text-gray-700">
                Inne
              </label>
            </div>
            
            {#if formData.inne}
              <div class="ml-6">
                <input
                  type="text"
                  id="inneopis"
                  bind:value={formData.inneopis}
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent {errors.inneopis ? 'border-red-500' : ''}"
                  placeholder="Opisz czym się interesujesz..."
                />
                {#if errors.inneopis}
                  <p class="mt-1 text-sm text-red-900">{errors.inneopis}</p>
                {/if}
              </div>
            {/if}
          </div>
        </div>
        
        <!-- Additional information -->
        <div>
          <label for="dodatkoweInformacje" class="block text-sm font-medium text-gray-700 mb-2">
            Dodatkowe informacje / pytania
          </label>
          <p class="text-sm text-gray-500 mb-2">
            Opisz lokal, termin realizacji, zakres prac – im więcej informacji tym łatwiej będzie nam zrozumieć Twoje potrzeby.
          </p>
          <textarea
            id="dodatkoweInformacje"
            bind:value={formData.dodatkoweInformacje}
            rows="4"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
            placeholder="np. mieszkanie 65m², remont całościowy, planowany termin: wiosna 2024..."
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
              Wyrażam zgodę na przetwarzanie moich danych osobowych przez Paket Invest Sp. z o.o., właściciela marki Paket Nieruchomości, w celu odpowiedzi na przesłane zapytanie, zgodnie z polityką prywatności.
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