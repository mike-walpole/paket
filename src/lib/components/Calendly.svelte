<script>
  import { onMount } from 'svelte';
  
  let name = '';
  let email = '';
  let company = '';
  let message = '';
  let phoneNumber = '';
  let purpose = '';
  let zgodaPrzetwarzanie = false;
  let zgodaMarketing = false;
  let formSubmitted = false;
  let formError = false;
  let isSubmitting = false;
  let errors = {};

  // Check if form can be submitted (both checkboxes must be checked)
  $: canSubmit = zgodaPrzetwarzanie && zgodaMarketing;

  async function handleSubmit() {
    errors = {};
    
    if (!name || !email || !phoneNumber || !purpose) {
      formError = true;
      return;
    }

    if (!zgodaPrzetwarzanie) {
      errors.zgodaPrzetwarzanie = 'Musisz wyrazić zgodę na przetwarzanie danych';
      formError = true;
      return;
    }

    if (!zgodaMarketing) {
      errors.zgodaMarketing = 'Musisz wyrazić zgodę na marketing';
      formError = true;
      return;
    }

    isSubmitting = true;
    formError = false;

    try {
      const response = await fetch('/api/contact-main', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          purpose,
          message,
          zgodaPrzetwarzanie,
          zgodaMarketing
        }),
      });

      const result = await response.json();

      if (result.success) {
        formSubmitted = true;
        // Reset form
        name = '';
        email = '';
        phoneNumber = '';
        purpose = '';
        message = '';
        zgodaPrzetwarzanie = false;
        zgodaMarketing = false;
        errors = {};
      } else {
        formError = true;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      formError = true;
    } finally {
      isSubmitting = false;
    }
  }

  let calendlyLoaded = false;
  
  onMount(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      calendlyLoaded = true;
    };
    document.head.appendChild(script);
    
    // Clean up when component is destroyed
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  });
</script>

<div id="calendly" class="px-4 sm:px-6 lg:px-8 py-24 ">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-bold mb-6">Porozmawiajmy o Twojej nieruchomości.</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Niezależnie czy chcesz sprzedać, kupić  czy potrzebujesz remontu  – jesteśmy po to, żeby ułatwić Ci ten proces.
      </p>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">Zawsze odpowiadamy szybko, bo szanujemy Twój czas.</p>
      
      <!-- Contact Information -->
      <div class="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
        <a href="tel:+48663912013" class="flex items-center gap-2 text-red-900 hover:text-red-950 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <span>+48 663 912 013</span>
        </a>
        <a href="mailto:biuro@paketnieruchomosci.pl" class="flex items-center gap-2 text-red-900 hover:text-red-950 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <span>biuro@paketnieruchomosci.pl</span>
        </a>
      </div>
    </div>

    <section class="py-16 md:py-16 ">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          
          
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Founders photo -->
            <div class="order-2 lg:order-1">
              <div class="relative h-96 lg:h-[500px] rounded-lg overflow-hidden flex items-center justify-center">
                <!-- Placeholder for founders photo -->
                <div class="text-center text-gray-500">
                  <img src="/onas.avif" alt="Founders" class="w-full h-full object-cover">
                </div>
              </div>
            </div>
            
            <!-- Founders story -->
            <div class="order-1 lg:order-2">
              
              <p class="text-lg mb-6 leading-relaxed">
                Tworzymy zespół, dla którego nieruchomości to coś więcej niż praca – to zaangażowanie, doświadczenie i dbałość o każdy szczegół.
              </p>
              <p class="text-lg mb-6 leading-relaxed">
                Pomagamy w sprzedaży, zakupie oraz wykończeniu mieszkań, tak aby cały proces był prosty, bezpieczny i dopasowany do Twoich potrzeb.
              </p>
              <p class="text-lg mb-6 leading-relaxed">
                Współpracujemy z prawnikami, projektantami i sprawdzonymi ekipami wykonawczymi, aby zapewnić kompleksową obsługę na najwyższym poziomie.
              </p>
              <p class="text-lg mb-6 leading-relaxed">Każdy projekt traktujemy indywidualnie, bo wiemy, że każda nieruchomość to nowa historia          </p>

              <p class="text-lg mb-6 leading-relaxed">Z nami możesz liczyć na profesjonalizm, transparentność i pełne wsparcie na każdym etapie.</p>


              
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-normal text-gray-900">Skontaktuj się z nami – działamy dla Ciebie!</h2>
      </div>

      <!-- Contact Form -->
      <div class="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow-sm">
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
            <input
              type="text"
              id="name"
              bind:value={name}
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
              placeholder="Jan Kowalski"
              required
            />
          </div>

          <div>
            <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
            <input
              type="tel"
              id="phone"
              bind:value={phoneNumber}
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
              placeholder="+48 123 456 789"
              required
            />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              bind:value={email}
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
              placeholder="jan@example.com"
              required
            />
          </div>

          <div>
            <label for="purpose" class="block text-sm font-medium text-gray-700 mb-1">Chcę</label>
            <select
              id="purpose"
              bind:value={purpose}
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
              required
            >
              <option value="">Wybierz opcję</option>
              <option value="kupic">Kupić</option>
              <option value="sprzedac">Sprzedać</option>
              <option value="wyremontowac">Wyremontować</option>
            </select>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Wiadomość (opcjonalnie)</label>
            <textarea
              id="message"
              bind:value={message}
              rows="4"
              class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-900 focus:border-red-900"
              placeholder="Napisz, czego potrzebujesz..."
            ></textarea>
          </div>

          <!-- Consent checkboxes -->
          <div class="space-y-4">
            <div class="flex items-start">
              <input
                type="checkbox"
                id="zgodaPrzetwarzanie"
                bind:checked={zgodaPrzetwarzanie}
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
                bind:checked={zgodaMarketing}
                class="mt-1 h-4 w-4 text-red-900 focus:ring-red-900 border-gray-300 rounded"
              />
              <label for="zgodaMarketing" class="ml-2 block text-sm text-gray-700">
                <span class="text-red-900">*</span>
                Wyrażam zgodę na otrzymywanie od Paket Invest Sp. z.o.o właściciela marki Paket Nieruchomości informacji handlowych drogą elektroniczną (e-mail, SMS, telefon)
              </label>
            </div>
            {#if errors.zgodaMarketing}
              <p class="text-sm text-red-900">{errors.zgodaMarketing}</p>
            {/if}
          </div>

          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            class="w-full py-3 px-4 rounded-md transition-colors duration-200 flex items-center justify-center {canSubmit && !isSubmitting
              ? 'bg-red-900 text-white hover:bg-red-950' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'}"
          >
            {#if isSubmitting}
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Wysyłanie...
            {:else}
              Wyślij wiadomość
            {/if}
          </button>

          {#if formError}
            <p class="text-red-600 text-sm text-center">Proszę wypełnić wszystkie wymagane pola lub spróbować ponownie.</p>
          {/if}

          {#if formSubmitted}
            <p class="text-green-600 text-sm text-center">Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.</p>
          {/if}
        </form>
      </div>
    </div>
  </div>
</div>

