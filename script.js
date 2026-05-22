/**
 * SplitWise Pro — Core State & Logic
 */

// ==========================================================================
// CENTRAL APPLICATION STATE
// ==========================================================================
const state = {
  bill: 0,          // Numerical value of the bill
  tipPercent: 15,   // Selected preset tip percentage (15% is the default)
  customTip: '',    // Custom tip value entered by user
  peopleCount: 1    // Count of people sharing the bill (default is 1)
};

// ==========================================================================
// DOM ELEMENT SELECTORS
// ==========================================================================
const billInput = document.getElementById('bill-input');
const peopleInput = document.getElementById('people-input');
const customTipInput = document.getElementById('custom-tip-input');
const presetBtns = document.querySelectorAll('.tip-preset-btn');
const tipAmountResult = document.getElementById('tip-amount-result');
const totalResult = document.getElementById('total-result');
const resetButton = document.getElementById('reset-button');

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initDefaults();
  setupEventListeners();
});

/**
 * Initializes default UI states
 */
function initDefaults() {
  state.bill = 0;
  state.tipPercent = 15;
  state.customTip = '';
  state.peopleCount = 1;

  // Clear inputs
  billInput.value = '';
  peopleInput.value = '';
  customTipInput.value = '';

  // Set default active preset button (15%)
  presetBtns.forEach(btn => {
    if (btn.dataset.tip === '15') {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Reset output text
  tipAmountResult.textContent = '$0.00';
  totalResult.textContent = '$0.00';

  // Disable reset button
  resetButton.disabled = true;
}

// ==========================================================================
// EVENT LISTENERS CONFIGURATION
// ==========================================================================
function setupEventListeners() {
  // Bill Input Event Listener
  billInput.addEventListener('input', (e) => {
    const rawVal = e.target.value;
    state.bill = rawVal === '' ? 0 : parseFloat(rawVal);
    calculateAndRender();
    updateResetButtonState();
  });

  // People Input Event Listener
  peopleInput.addEventListener('input', (e) => {
    const rawVal = e.target.value;
    state.peopleCount = rawVal === '' ? 1 : parseFloat(rawVal);
    calculateAndRender();
    updateResetButtonState();
  });

  // Preset Buttons Click Event Listener
  presetBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Clear active presets
      presetBtns.forEach(b => b.classList.remove('active'));
      
      // Mark clicked preset as active
      e.target.classList.add('active');
      
      // Clear custom tip
      customTipInput.value = '';
      state.customTip = '';
      
      // Update state
      state.tipPercent = parseFloat(e.target.dataset.tip);
      
      calculateAndRender();
      updateResetButtonState();
    });
  });

  // Custom Tip Input Event Listener
  customTipInput.addEventListener('input', (e) => {
    // Clear active presets
    presetBtns.forEach(b => b.classList.remove('active'));
    
    // Read custom value
    const rawVal = e.target.value;
    state.customTip = rawVal;
    
    if (rawVal === '') {
      // If custom tip is cleared, default back to no preset active, tip value is 0
      state.tipPercent = 0;
    } else {
      state.tipPercent = parseFloat(rawVal);
    }
    
    calculateAndRender();
    updateResetButtonState();
  });

  // Clear presets on Custom Tip Focus
  customTipInput.addEventListener('focus', () => {
    presetBtns.forEach(b => b.classList.remove('active'));
    if (customTipInput.value !== '') {
      state.tipPercent = parseFloat(customTipInput.value) || 0;
    } else {
      state.tipPercent = 0;
    }
    calculateAndRender();
  });

  // Reset Button Click Event Listener
  resetButton.addEventListener('click', () => {
    initDefaults();
  });
}

// ==========================================================================
// CALCULATION & RENDERING ENGINE
// ==========================================================================
/**
 * Calculates tip and total amounts per person, and updates the display
 */
function calculateAndRender() {
  const billVal = state.bill;
  const peopleVal = state.peopleCount;
  const tipVal = state.customTip !== '' ? parseFloat(state.customTip) : state.tipPercent;

  // Safe checks: If bill is 0 or negative, or people count is 0 or negative, display $0.00
  if (isNaN(billVal) || billVal <= 0 || isNaN(peopleVal) || peopleVal <= 0 || isNaN(tipVal) || tipVal < 0) {
    tipAmountResult.textContent = '$0.00';
    totalResult.textContent = '$0.00';
    return;
  }

  // Calculate
  const totalTip = billVal * (tipVal / 100);
  const grandTotal = billVal + totalTip;

  const tipPerPerson = totalTip / peopleVal;
  const totalPerPerson = grandTotal / peopleVal;

  // Format to standard 2 decimal financial format
  tipAmountResult.textContent = formatCurrency(tipPerPerson);
  totalResult.textContent = formatCurrency(totalPerPerson);
}

/**
 * Formats a number to currency string, e.g., 4.2833 -> $4.28
 */
function formatCurrency(value) {
  // Use standard rounding and formatting
  return '$' + value.toFixed(2);
}

/**
 * Checks if the reset button should be enabled/disabled
 */
function updateResetButtonState() {
  // If the user entered anything in Bill, Custom Tip, or People, or clicked a preset other than default (15%)
  const hasBillInput = billInput.value !== '';
  const hasPeopleInput = peopleInput.value !== '';
  const hasCustomTip = customTipInput.value !== '';
  const hasSelectedDifferentPreset = !document.querySelector('.tip-preset-btn[data-tip="15"]').classList.contains('active');

  if (hasBillInput || hasPeopleInput || hasCustomTip || hasSelectedDifferentPreset) {
    resetButton.disabled = false;
  } else {
    resetButton.disabled = true;
  }
}
