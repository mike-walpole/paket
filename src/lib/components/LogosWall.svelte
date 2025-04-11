<script>
  const partners = [
    { name: 'Polski Związek Firm Deweloperskich', logo: '/logos/eco1.svg' },
    { name: 'Stowarzyszenie Rzeczoznawców Majątkowych', logo: '/logos/eco2.svg' },
    { name: 'Polska Izba Ubezpieczeń', logo: '/logos/eco3.svg' },
    { name: 'Krajowa Izba Gospodarki Nieruchomościami', logo: '/logos/eco4.svg' },
    { name: 'Stowarzyszenie Pośredników Nieruchomości', logo: '/logos/eco5.svg' }
  ];
  
  const developers = [
    { name: 'J.W. Construction', logo: '/logos/client1.svg' },
    { name: 'Echo Investment', logo: '/logos/client2.svg' },
    { name: 'Dom Development', logo: '/logos/client3.svg' },
    { name: 'Develia', logo: '/logos/client4.svg' },
    { name: 'Robyg', logo: '/logos/client5.svg' }
  ];
</script>

<div class="px-4 sm:px-6 lg:px-8 py-24 bg-white">
  <div class="mb-24">
    <h2 class="text-5xl md:text-6xl mb-16 font-normal">Nasi partnerzy</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16">
      {#each partners as partner, index}
        <div class="text-center pl-0 {index > 0 ? 'md:border-l md:pl-4 border-red-600' : ''} flex flex-col items-center justify-center">
          <!-- For demo purposes we're showing names, but you'd display logos here -->
          <div class="text-xl font-medium">{partner.name}</div>
        </div>
      {/each}
    </div>
  </div>
  
  <div>
    <h2 class="text-5xl md:text-6xl mb-16 font-normal">Współpracujący deweloperzy</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-16">
      {#each developers as developer, index}
        <div class="text-center pl-0 {index > 0 ? 'md:border-l md:pl-4 border-red-600' : ''} flex flex-col items-center justify-center">
          <!-- For demo purposes we're showing names, but you'd display logos here -->
          <div class="text-xl font-medium">{developer.name}</div>
        </div>
      {/each}
    </div>
  </div>
</div> 