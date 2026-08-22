/**
 * Clean and Stuff - Interactive Instant Estimate Calculator
 */
document.addEventListener('DOMContentLoaded', () => {
  const serviceButtons = document.querySelectorAll('.service-opt-btn');
  const freqButtons = document.querySelectorAll('.freq-btn');
  const addonInputs = document.querySelectorAll('.addon-chip input');
  
  const bedCountElem = document.getElementById('calc-bed-count');
  const bathCountElem = document.getElementById('calc-bath-count');
  const bedMinusBtn = document.getElementById('bed-minus');
  const bedPlusBtn = document.getElementById('bed-plus');
  const bathMinusBtn = document.getElementById('bath-minus');
  const bathPlusBtn = document.getElementById('bath-plus');
  
  const priceDisplay = document.getElementById('calc-total-price');
  const summaryService = document.getElementById('calc-summary-service');
  const summaryRooms = document.getElementById('calc-summary-rooms');
  const summaryFreq = document.getElementById('calc-summary-freq');
  const summaryAddons = document.getElementById('calc-summary-addons');
  const bookEstimateBtn = document.getElementById('book-estimate-btn');

  if (!priceDisplay) return;

  // State
  let serviceType = 'standard'; // 'standard', 'deep', 'move'
  let bedrooms = 3;
  let bathrooms = 2;
  let frequency = 'biweekly'; // 'onetime', 'weekly', 'biweekly', 'monthly'
  let frequencyDiscount = 0.15; // 15% off for biweekly

  // Pricing Matrix
  const basePrices = {
    standard: 120,
    deep: 190,
    move: 240
  };

  const roomRates = {
    standard: { bed: 25, bath: 30 },
    deep: { bed: 40, bath: 45 },
    move: { bed: 50, bath: 55 }
  };

  const addonPrices = {
    oven: 35,
    fridge: 35,
    windows: 45,
    grout: 60,
    dusting: 40
  };

  function calculateEstimate() {
    const base = basePrices[serviceType] || 120;
    const rates = roomRates[serviceType] || roomRates.standard;
    
    // Additional rooms beyond baseline (1 bed / 1 bath baseline)
    const extraBed = Math.max(0, bedrooms - 1) * rates.bed;
    const extraBath = Math.max(0, bathrooms - 1) * rates.bath;
    
    // Add-ons
    let addonsTotal = 0;
    let selectedAddonNames = [];
    
    addonInputs.forEach(input => {
      if (input.checked) {
        const val = input.value;
        addonsTotal += (addonPrices[val] || 0);
        selectedAddonNames.push(input.dataset.name || val);
        input.closest('.addon-chip').classList.add('selected');
      } else {
        input.closest('.addon-chip').classList.remove('selected');
      }
    });

    const subtotal = base + extraBed + extraBath + addonsTotal;
    const discountedTotal = Math.round(subtotal * (1 - frequencyDiscount));

    // Update UI
    priceDisplay.textContent = `$${discountedTotal}`;
    
    const serviceLabels = {
      standard: 'Standard Residential Clean',
      deep: 'Deep Residential Clean',
      move: 'Move-In / Move-Out Clean'
    };
    
    const freqLabels = {
      onetime: 'One-Time Service',
      weekly: 'Weekly (20% Savings)',
      biweekly: 'Bi-Weekly (15% Savings)',
      monthly: 'Monthly (10% Savings)'
    };

    if (summaryService) summaryService.textContent = serviceLabels[serviceType];
    if (summaryRooms) summaryRooms.textContent = `${bedrooms} Bed, ${bathrooms} Bath`;
    if (summaryFreq) summaryFreq.textContent = freqLabels[frequency];
    if (summaryAddons) {
      summaryAddons.textContent = selectedAddonNames.length > 0 ? selectedAddonNames.join(', ') : 'None';
    }
  }

  // Service Type Switcher
  serviceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      serviceButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      serviceType = btn.dataset.service;
      calculateEstimate();
    });
  });

  // Frequency Switcher
  freqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      freqButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      frequency = btn.dataset.freq;
      frequencyDiscount = parseFloat(btn.dataset.discount) || 0;
      calculateEstimate();
    });
  });

  // Room Counters
  if (bedMinusBtn && bedPlusBtn) {
    bedMinusBtn.addEventListener('click', () => {
      if (bedrooms > 1) {
        bedrooms--;
        bedCountElem.textContent = bedrooms;
        calculateEstimate();
      }
    });
    bedPlusBtn.addEventListener('click', () => {
      if (bedrooms < 8) {
        bedrooms++;
        bedCountElem.textContent = bedrooms;
        calculateEstimate();
      }
    });
  }

  if (bathMinusBtn && bathPlusBtn) {
    bathMinusBtn.addEventListener('click', () => {
      if (bathrooms > 1) {
        bathrooms--;
        bathCountElem.textContent = bathrooms;
        calculateEstimate();
      }
    });
    bathPlusBtn.addEventListener('click', () => {
      if (bathrooms < 7) {
        bathrooms++;
        bathCountElem.textContent = bathrooms;
        calculateEstimate();
      }
    });
  }

  // Addons Checkbox change
  addonInputs.forEach(input => {
    input.addEventListener('change', calculateEstimate);
  });

  // Book Estimate CTA - Autofill form and scroll to contact
  if (bookEstimateBtn) {
    bookEstimateBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceSelect = document.getElementById('form-service');
      const notesField = document.getElementById('form-notes');
      const contactSection = document.getElementById('contact');

      if (serviceSelect) {
        if (serviceType === 'standard') serviceSelect.value = 'residential-standard';
        else if (serviceType === 'deep') serviceSelect.value = 'residential-deep';
        else if (serviceType === 'move') serviceSelect.value = 'residential-move';
      }

      if (notesField) {
        const estText = `Estimated for: ${bedrooms} Bed, ${bathrooms} Bath | Frequency: ${frequency} | Ballpark: ${priceDisplay.textContent}`;
        notesField.value = estText;
      }

      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // Initialize
  calculateEstimate();
});
