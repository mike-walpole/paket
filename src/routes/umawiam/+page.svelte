<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  
  // Utility functions for formatting dates and times
  const formatDate = (date) => {
    return new Intl.DateTimeFormat('pl-PL', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).format(date);
  };
  
  const formatTime = (date) => {
    return new Intl.DateTimeFormat('pl-PL', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    }).format(date);
  };
  
  // Hard-coded upcoming sessions for demo
  let upcomingSessions = [
    {
      id: 1,
      start_time: new Date(Date.now() + 86400000).setHours(10, 0, 0),
      end_time: new Date(Date.now() + 86400000).setHours(11, 0, 0),
      purchase: { pakiet: { nazwa: 'Konsultacja wstępna' } }
    },
    {
      id: 2,
      start_time: new Date(Date.now() + 345600000).setHours(14, 0, 0),
      end_time: new Date(Date.now() + 345600000).setHours(15, 0, 0),
      purchase: { pakiet: { nazwa: 'Konsultacja pełna' } }
    }
  ];
  
  // Function to get video call URL (placeholder)
  const getVideoCallUrl = (session) => {
    return `https://meet.google.com/fake-meeting-${session.id}`;
  };
  
  // Calendar state
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();
  let showingMonth = currentMonth;
  let showingYear = currentYear;
  let selectedDate = null;
  let selectedSlot = null;
  let monthData = [];
  let availableSlots = [];
  
  $: monthName = new Intl.DateTimeFormat('pl-PL', { month: 'long' }).format(
    new Date(showingYear, showingMonth, 1)
  );
  
  // Calendar navigation
  const nextMonth = () => {
    if (showingMonth === 11) {
      showingMonth = 0;
      showingYear += 1;
    } else {
      showingMonth += 1;
    }
    generateMonthData();
  };
  
  const prevMonth = () => {
    if (showingMonth === 0) {
      showingMonth = 11;
      showingYear -= 1;
    } else {
      showingMonth -= 1;
    }
    generateMonthData();
  };
  
  // Generate calendar data
  const generateMonthData = () => {
    const firstDay = new Date(showingYear, showingMonth, 1).getDay();
    const daysInMonth = new Date(showingYear, showingMonth + 1, 0).getDate();
    
    // Adjust for Monday as first day (European calendar)
    const firstDayIndex = firstDay === 0 ? 6 : firstDay - 1;
    
    let date = 1;
    monthData = [];
    
    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayIndex) {
          week.push(null);
        } else if (date > daysInMonth) {
          week.push(null);
        } else {
          week.push(date);
          date++;
        }
      }
      monthData.push(week);
      if (date > daysInMonth) break;
    }
  };
  
  // Check if date is selectable (not in the past and not weekend for simplicity)
  const isDateSelectable = (day) => {
    if (!day) return false;
    
    const date = new Date(showingYear, showingMonth, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Don't allow dates in the past
    if (date < today) return false;
    
    // For demo purposes, don't allow weekends
    const dayOfWeek = date.getDay();
    return dayOfWeek !== 0 && dayOfWeek !== 6;
  };
  
  // Generate available time slots for selected date
  const selectDate = (day) => {
    if (!day || !isDateSelectable(day)) return;
    
    selectedDate = new Date(showingYear, showingMonth, day);
    selectedSlot = null;
    generateAvailableSlots();
  };
  
  // Generate fake available slots for the selected date
  const generateAvailableSlots = () => {
    availableSlots = [];
    
    // Generate slots from 9 AM to 5 PM with 1-hour intervals
    for (let hour = 9; hour < 17; hour++) {
      // Skip random slots to simulate unavailability
      if (Math.random() > 0.7) continue;
      
      const start = new Date(selectedDate);
      start.setHours(hour, 0, 0, 0);
      
      const end = new Date(selectedDate);
      end.setHours(hour + 1, 0, 0, 0);
      
      availableSlots.push({ start, end });
    }
  };
  
  // Create a proper writable store for booking status
  const bookingStatus = writable({
    loading: false,
    success: false,
    error: null
  });
  
  // Handle booking submission
  const handleBooking = () => {
    if (!selectedSlot) return;
    
    bookingStatus.set({
      loading: true,
      success: false,
      error: null
    });
    
    // Simulate API call
    setTimeout(() => {
      if (Math.random() > 0.2) { // 80% success rate for demo
        // Success
        bookingStatus.set({
          loading: false,
          success: true,
          error: null
        });
        
        // Add to upcoming sessions
        upcomingSessions = [
          ...upcomingSessions,
          {
            id: Math.floor(Math.random() * 1000),
            start_time: selectedSlot.start.getTime(),
            end_time: selectedSlot.end.getTime(),
            purchase: { pakiet: { nazwa: 'Nowa Rezerwacja' } }
          }
        ];
        
        // Reset selection
        selectedSlot = null;
      } else {
        // Error
        bookingStatus.set({
          loading: false,
          success: false,
          error: 'Wystąpił błąd podczas rezerwacji. Spróbuj ponownie.'
        });
      }
    }, 1000);
  };
  
  // Handle session cancellation
  let sessionToCancel = null;
  
  const showCancelConfirmation = (session) => {
    sessionToCancel = session;
  };
  
  const cancelSession = () => {
    if (!sessionToCancel) return;
    
    // Remove from upcoming sessions
    upcomingSessions = upcomingSessions.filter(s => s.id !== sessionToCancel.id);
    sessionToCancel = null;
  };
  
  // Initialize calendar on mount
  onMount(() => {
    generateMonthData();
  });
</script>

<div class="max-w-4xl mx-auto px-4 py-8">
  <h1 class="text-3xl font-bold text-gray-900">Kalendarz spotkań</h1>
  <p class="mt-2 text-gray-600">Zarezerwuj spotkanie w dogodnym dla Ciebie terminie.</p>
  
  <div class="mt-12">
    <h3 class="text-xl font-semibold text-gray-900">Nadchodzące Sesje</h3>
    {#if upcomingSessions.length > 0}
      <div class="mt-4 space-y-4">
        {#each upcomingSessions as session}
          <div class="border border-gray-200 rounded-lg p-4 shadow-sm">
            <div class="flex justify-between">
              <div>
                <p class="font-medium">{session.purchase?.pakiet?.nazwa || 'Sesja'}</p>
                <p class="text-gray-500">
                  {formatDate(new Date(session.start_time))}
                </p>
                <p class="text-gray-500">
                  {formatTime(new Date(session.start_time))} - {formatTime(new Date(session.end_time))}
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 space-x-2">
                <button
                  on:click={() => showCancelConfirmation(session)}
                  class="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium text-black border border-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Anuluj
                </button>
                <a
                  href={getVideoCallUrl(session)}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Dołącz do rozmowy
                </a>
              </div>
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p class="mt-4 text-gray-500">Nie masz żadnych nadchodzących sesji.</p>
    {/if}
  </div>

  <div class="mt-12">
    <h3 class="text-xl font-semibold text-gray-900">Zarezerwuj Sesję</h3>
    <div class="mt-6">
      <div class="flex justify-between items-center mb-4">
        <button 
          on:click={prevMonth}
          class="p-2 text-gray-600 hover:text-gray-900 disabled:text-gray-400"
          disabled={showingMonth === currentMonth && showingYear === currentYear}
        >
          ←
        </button>
        <h4 class="text-lg font-medium">{monthName} {showingYear}</h4>
        <button 
          on:click={nextMonth}
          class="p-2 text-gray-600 hover:text-gray-900"
        >
          →
        </button>
      </div>

      <div class="grid grid-cols-7 gap-1">
        {#each ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'] as day}
          <div class="text-center text-sm font-medium p-2">{day}</div>
        {/each}
        
        {#each monthData as week}
          {#each week as day}
            <div class="flex justify-center items-center">
              <button
                class={`
                  w-9 h-9 flex items-center justify-center rounded-full
                  ${day ? 'hover:bg-gray-100' : ''}
                  ${selectedDate && day === selectedDate.getDate() && showingMonth === selectedDate.getMonth() 
                    ? 'bg-black text-white' 
                    : ''}
                  ${!isDateSelectable(day) ? 'text-gray-400 cursor-not-allowed' : 'text-gray-900'}
                `}
                disabled={!isDateSelectable(day)}
                on:click={() => selectDate(day)}
              >
                {day || ''}
              </button>
            </div>
          {/each}
        {/each}
      </div>
    </div>

    {#if selectedDate && availableSlots.length > 0}
      <div class="mt-8">
        <h4 class="text-lg font-medium text-gray-900">
          Dostępne terminy ({formatDate(selectedDate)}):
        </h4>
        <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {#each availableSlots as slot}
            <button
              class={`p-4 text-center rounded-lg border ${
                selectedSlot === slot
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 hover:border-black'
              }`}
              on:click={() => selectedSlot = slot}
            >
              {formatTime(slot.start)} - {formatTime(slot.end)}
            </button>
          {/each}
        </div>
      </div>
    {:else if selectedDate}
      <p class="mt-4 text-gray-500">Brak dostępnych terminów w wybranym dniu.</p>
    {/if}

    {#if selectedSlot}
      <div class="mt-8">
        <div class="rounded-md bg-gray-50 p-4">
          <div class="flex">
            <div class="flex-shrink-0">
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
              </svg>
            </div>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-gray-800">
                Potwierdzenie rezerwacji
              </h3>
              <div class="mt-2 text-sm text-gray-600">
                <p>Data: {formatDate(selectedSlot.start)}</p>
                <p>Godzina: {formatTime(selectedSlot.start)} - {formatTime(selectedSlot.end)}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          on:click={handleBooking}
          class="mt-4 w-full bg-black border border-transparent rounded-md py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
        >
          Potwierdź rezerwację
        </button>
      </div>
    {/if}

    {#if $bookingStatus.error}
      <p class="mt-4 text-red-600">{$bookingStatus.error}</p>
    {/if}

    {#if $bookingStatus.success}
      <p class="mt-4 text-green-600">Sesja została zarezerwowana pomyślnie!</p>
    {/if}
  </div>
  
  {#if sessionToCancel}
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div class="bg-white rounded-lg max-w-md w-full p-6">
        <h3 class="text-lg font-medium text-gray-900">Anulowanie sesji</h3>
        <p class="mt-2 text-sm text-gray-500">
          Czy jesteś pewien, że chcesz anulować sesję {sessionToCancel.purchase?.pakiet?.nazwa || 'Sesja'} zaplanowaną na {formatDate(new Date(sessionToCancel.start_time))} o godzinie {formatTime(new Date(sessionToCancel.start_time))}?
        </p>
        <div class="mt-4 flex justify-end space-x-3">
          <button
            on:click={() => sessionToCancel = null}
            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Anuluj
          </button>
          <button
            on:click={cancelSession}
            class="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700"
          >
            Potwierdź anulowanie
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>
