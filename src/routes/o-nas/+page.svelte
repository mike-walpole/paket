<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
  <title>O nas | Paket</title>
  <meta name="description" content="Poznaj historię Paket - profesjonalnej firmy zajmującej się nieruchomościami. Dowiedz się o naszych założycielach i misji transformacji rynku nieruchomości." />
</svelte:head>

<div class="relative">
  <Navbar />
  
  <!-- Hero section -->
  <div class="relative h-[50vh] overflow-hidden" 
       style="background-image: url('/cherwell6.avif'); 
              background-size: cover;
              background-position: center;">
    <div class="absolute inset-0 bg-black/30 z-10"></div>
    <div class="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">O nas</h1>
      <p class="text-xl md:text-2xl text-white max-w-3xl">Transformujemy rynek nieruchomości przez transparentność i profesjonalizm</p>
    </div>
  </div>

  <!-- Main content -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto">
        <!-- Introduction -->
        <div class="mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-8 text-center">Nasza historia</h2>
          <p class="text-lg mb-6 leading-relaxed">
            Paket powstał z prostej obserwacji: rynek nieruchomości potrzebuje rewolucji. Zbyt długo klienci doświadczali frustracji związanej z nieprzejrzystymi procesami, ukrytymi kosztami i brakiem rzeczywistego wsparcia w najważniejszych decyzjach finansowych swojego życia.
          </p>
          <p class="text-lg mb-6 leading-relaxed">
            Założyliśmy Paket, aby zmienić ten stan rzeczy. Wierzymy, że każda transakcja nieruchomościowa powinna być przejrzysta, profesjonalna i skoncentrowana na realnych potrzebach klienta. To nie tylko słowa – to nasza codzienność.
          </p>
        </div>

        <!-- Mission and Values -->
        <div class="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 class="text-2xl font-bold mb-6">Nasza misja</h3>
            <p class="text-lg leading-relaxed mb-6">
              Demokratyzujemy dostęp do profesjonalnych usług nieruchomościowych. Każdy klient, niezależnie od budżetu czy doświadczenia, zasługuje na ekspertyzę na najwyższym poziomie.
            </p>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Pełna transparentność w każdym procesie</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Indywidualne podejście do każdego klienta</span>
              </li>
              <li class="flex items-start">
                <span class="text-red-900 mr-2 mt-1">✓</span>
                <span>Wykorzystanie nowoczesnych technologii</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-2xl font-bold mb-6">Nasze wartości</h3>
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold mb-2">Uczciwość</h4>
                <p>Mówimy prawdę, nawet gdy nie jest to dla nas korzystne. Budujemy relacje oparte na zaufaniu.</p>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Ekspertyza</h4>
                <p>Ciągle się uczymy i rozwijamy, aby oferować rozwiązania na najwyższym poziomie.</p>
              </div>
              <div>
                <h4 class="text-lg font-semibold mb-2">Innowacyjność</h4>
                <p>Łączymy tradycyjną wiedzę rynkową z nowoczesnymi narzędziami i metodami pracy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Founders section -->
  <section class="py-16 md:py-24 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">Poznaj naszych założycieli</h2>
        
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
            <h3 class="text-2xl font-bold mb-6">Pasja do nieruchomości</h3>
            <p class="text-lg mb-6 leading-relaxed">
              Nasi założyciele to zespół doświadczonych profesjonalistów z wieloletnim stażem w branży nieruchomości, finansów i technologii. Połączyli swoje umiejętności i wizję, aby stworzyć firmę, która rzeczywiście stawia klienta na pierwszym miejscu.
            </p>
            <p class="text-lg mb-6 leading-relaxed">
              Z ponad 15-letnim doświadczeniem w branży, przeprowadzili setki transakcji, pomagając klientom w najważniejszych decyzjach finansowych ich życia. To właśnie te doświadczenia ukształtowały filozofię Paket – każdy klient zasługuje na pełne wsparcie i transparentność.
            </p>
            
            <div class="bg-white p-6 rounded-lg border-l-4 border-red-900">
              <p class="text-lg italic leading-relaxed">
                "Wierzymy, że zakup, sprzedaż czy remont mieszkania to nie tylko transakcja biznesowa – to inwestycja w przyszłość i jakość życia. Dlatego podchodzimy do każdego projektu z pełnym zaangażowaniem i pasją."
              </p>
              <div class="mt-4 text-sm text-gray-600">
                — Łukasz i xxx Kaczmarek
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Why choose us -->
  <section class="py-16 md:py-24 bg-white">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-8">Dlaczego warto nam zaufać?</h2>
        <p class="text-lg mb-12 leading-relaxed">
          W Paket nie sprzedajemy mieszkań – pomagamy ludziom znaleźć dom. Nie robimy remontów – tworzymy przestrzenie marzeń. Nie obsługujemy transakcji – budujemy przyszłość.
        </p>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center">
            
            <h3 class="text-xl font-bold mb-3">Sprawdzeni eksperci</h3>
            <p>Zespół z wieloletnim doświadczeniem i setkami udanych transakcji za sobą.</p>
          </div>
          
          <div class="text-center">
            
            <h3 class="text-xl font-bold mb-3">Indywidualne podejście</h3>
            <p>Każdy klient i każdy projekt traktujemy jako unikalny, wymagający spersonalizowanego podejścia.</p>
          </div>
          
          <div class="text-center">
            
            <h3 class="text-xl font-bold mb-3">Szybkość i efektywność</h3>
            <p>Wykorzystujemy najnowsze technologie, aby proces był jak najszybszy i jak najbardziej komfortowy.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to action -->
  <section class="py-16 md:py-24 bg-black text-white">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-bold mb-6">Gotowy na współpracę?</h2>
      <p class="text-xl mb-8 max-w-2xl mx-auto">
        Dołącz do setek zadowolonych klientów, którzy zaufali Paket w najważniejszych decyzjach dotyczących nieruchomości.
      </p>
      <a
        href="/kontakt"
        class="inline-flex items-center px-8 py-4 bg-red-900 hover:bg-red-700 text-white font-medium rounded-md transition-colors duration-200"
      >
        Skontaktuj się z nami
      </a>
    </div>
  </section>
</div>

<Footer /> 