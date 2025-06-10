<script>
  import ProductGrid from '$lib/components/ProductGrid.svelte';
  import Testimonial from '$lib/components/Testimonial.svelte';
  import WhyYouLove from '$lib/components/WhyYouLove.svelte';
  import Stats from '$lib/components/Stats.svelte';
  import Investors from '$lib/components/Investors.svelte';
  import Careers from '$lib/components/Careers.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Navbar from '$lib/components/Navbar.svelte';
  import Benefits from '$lib/components/Benefits.svelte';
  import LogosWall from '$lib/components/LogosWall.svelte';
  import DeliverySolution from '$lib/components/DeliverySolution.svelte';
  import FeaturedPosts from '$lib/components/FeaturedPosts.svelte';
  import { page } from '$app/stores';
  import Calendly from '$lib/components/Calendly.svelte';
  
  export let data;
  // Home page component
  
</script>
<svelte:head>
  <title>Paket - Twoje zaufane biuro nieruchomości</title>
  <meta name="description" content="Paket - kompleksowe rozwiązania nieruchomościowe. Kupno, sprzedaż, wynajem mieszkań oraz profesjonalne usługi remontowe." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={$page.url.href} />
  <meta property="og:title" content="Paket - Twoje zaufane biuro nieruchomości" />
  <meta property="og:description" content="Kompleksowe rozwiązania nieruchomościowe. Kupno, sprzedaż, wynajem mieszkań oraz profesjonalne usługi remontowe." />
  <meta property="og:image" content="/jars-hero.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Paket - Twoje zaufane biuro nieruchomości" />
  <meta name="twitter:description" content="Kompleksowe rozwiązania nieruchomościowe dla Twoich potrzeb." />
  <meta name="twitter:image" content="/jars-hero.jpg" />
</svelte:head>


<Navbar />
<div class="relative min-h-screen">
  <!-- Hero Image -->
  <div class="absolute inset-0 z-0">
    <img 
      src="/3.png" 
      alt="Paket - Twoje zaufane biuro nieruchomości" 
      class="w-full h-full object-cover"
    />
    <!-- Overlay for better text readability -->
    <div class="absolute inset-0 bg-black/30"></div>
  </div>

  <!-- Bottom Content -->
  <div class="absolute bottom-0 left-0 right-0 pb-12 md:pb-12 pb-[80px]">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:justify-between gap-12">
        <!-- Left Content -->
        

        <!-- Right Content -->
        <div class="w-full md:w-1/2 pl-8 border-l border-white h-[200px] flex flex-col items-start pt-1">
          <h1 class="text-2xl md:text-3xl lg:text-4xl text-white font-normal leading-tight">
            Sprzedaj, kup lub wykończ nieruchomość z zespołem, który dowozi efekty.
          </h1>
          <h2 class="text-white mt-6 text-xl mb-3">Działamy tak, jak sami chcielibyśmy być obsłużeni.</h2>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="bg-white">
  <ProductGrid />
</div>
<Investors />
<Benefits />

<Testimonial />

<FeaturedPosts posts={data.featuredPosts} />





<Calendly />

<Footer />
