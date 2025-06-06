<script>
  const services = [
    {
      number: '01',
      title: 'Pomoc w sprzedaży nieruchomości',
      description: 'Kompleksowa obsługa sprzedaży Twojej nieruchomości - od wyceny, przez przygotowanie do sprzedaży, po finalizację transakcji. Zapewniamy profesjonalny marketing i dotarcie do najlepszych nabywców.',
      image: '/service-1.png' // placeholder
    },
    {
      number: '02', 
      title: 'Wsparcie w zakupie mieszkania lub domu',
      description: 'Pomagamy znaleźć idealne mieszkanie lub dom dopasowany do Twoich potrzeb i budżetu. Organizujemy oglądania, negocjujemy cenę i przeprowadzamy przez cały proces zakupu.',
      image: '/service-2.png' // placeholder
    },
    {
      number: '03',
      title: 'Doradztwo inwestycyjne i analiza opłacalności', 
      description: 'Profesjonalne doradztwo przy wyborze nieruchomości inwestycyjnych. Analizujemy rentowność, potencjał wzrostu wartości i pomagamy budować portfel nieruchomości.',
      image: '/service-3.png' // placeholder
    },
    {
      number: '04',
      title: 'Organizacja finansowania i kredytów',
      description: 'Pomagamy w uzyskaniu najkorzystniejszych warunków kredytowych. Współpracujemy z bankami, przygotowujemy dokumentację i wspieramy w całym procesie finansowania.',
      image: '/service-4.png' // placeholder
    },
    {
      number: '05',
      title: 'Projekty wnętrz dopasowane do budżetu',
      description: 'Tworzymy funkcjonalne i estetyczne projekty wnętrz, które podkreślą zalety Twojej nieruchomości. Projektujemy z myślą o komforcie i wartości dodanej.',
      image: '/service-5.png' // placeholder
    },
    {
      number: '06',
      title: 'Kompleksowa obsługa transakcji',
      description: 'Zajmujemy się wszystkimi formalnościami - przygotowujemy umowy, prowadzimy negocjacje, weryfikujemy dokumenty i pilnujemy terminów realizacji.',
      image: '/service-6.png' // placeholder
    },
    {
      number: '07',
      title: 'Weryfikacja stanu prawnego nieruchomości',
      description: 'Dokładnie sprawdzamy stan prawny nieruchomości, księgi wieczyste, obciążenia i inne aspekty prawne, aby zapewnić bezpieczeństwo transakcji.',
      image: '/service-7.png' // placeholder
    },
    {
      number: '08',
      title: 'Generalne wykonawstwo – wykończenie pod klucz',
      description: 'Kompleksowe wykończenie nieruchomości pod klucz. Od projektu, przez dobór materiałów, po nadzór nad realizacją - zajmujemy się wszystkim.',
      image: '/service-8.png' // placeholder
    }
  ];
</script>

<section class="py-16 md:py-24 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="mb-16 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">ZAKRES NASZYCH USŁUG</h2>
      <p class="text-xl text-gray-600">Co możemy dla Ciebie zrobić?</p>
    </div>
    
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12">
        {#each services as service, index}
          <div class="service-item">
            <div class="">
              <div class="flex flex-col items-center justify-center">
                
                <!-- Placeholder for infographic image -->
                <div class="w-16 h-16 rounded-lg flex items-center justify-center">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    class="w-16 h-16 object-contain"
                    
                  />
                  
                </div>
              </div>
              <div>
                <h3 class="text-xl font-bold my-3">{service.title}</h3>
                <p class="text-gray-800">{service.description}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
    
    <!-- Call to action -->
    
  </div>
</section> 