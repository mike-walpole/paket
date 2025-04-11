<script>
  import { onMount } from 'svelte';
  
  let name = '';
  let email = '';
  let company = '';
  let message = '';
  let phoneNumber = '';
  let formSubmitted = false;
  let formError = false;

  function handleSubmit() {
    if (name && email && message) {
      formSubmitted = true;
      formError = false;
      // Here you would normally send the form data to your backend
      // For demo purposes, we're just setting a success state
    } else {
      formError = true;
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

<div class="px-4 sm:px-6 lg:px-8 py-24 bg-gray-100">
  <div class="max-w-7xl mx-auto">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-normal mb-6">Umów się na spotkanie</h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Wybierz dogodny termin i spotkaj się z naszym ekspertem, który pomoże Ci znaleźć wymarzone mieszkanie.
      </p>
    </div>

    <div class="bg-white rounded-lg shadow-sm p-8">
      
        <div 
          class="calendly-inline-widget" 
          data-url="https://calendly.com/michal-hotelgo/30min"
          style="min-width:320px;height:700px;"
        ></div>
      
    </div>

    <div class="mt-12 text-center">
      <p class="text-gray-600">
        Nie możesz znaleźć odpowiedniego terminu? 
        <a href="tel:+48538315654" class="text-red-900 hover:text-red-950">Zadzwoń do nas</a> lub 
        <a href="mailto:office-brodnica@jar-and-more.com" class="text-red-900 hover:text-red-950">wyślij email</a>
      </p>
    </div>
  </div>
</div>

