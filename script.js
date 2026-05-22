/**
 * SplitWise Pro — State, Calculations, Validation & Sanitization
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

// Error message containers
const billError = document.getElementById('bill-error');
const tipError = document.getElementById('tip-error');
const peopleError = document.getElementById('people-error');

// ==========================================================================
// INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initDefaults();
  setupEventListeners();
});

/**
 * Initializes default UI states and clears errors
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

  // Clear error messages
  clearError(billInput, billError);
  clearError(peopleInput, peopleError);
  clearError(customTipInput, tipError);

  // Set default active preset button (15%)
  presetBtns.forEach(btn => {
    if (btn.dataset.tip === '15') {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Reset output text
  updateResultText(tipAmountResult, 0);
  updateResultText(totalResult, 0);

  // Disable reset button
  resetButton.disabled = true;
}

// ==========================================================================
// INPUT SANITIZATION HELPERS
// ==========================================================================
/**
 * Restricts input to digits and at most one decimal point with 2 decimal digits
 */
function sanitizeDecimal(value) {
  // Remove non-numeric characters except '.'
  let clean = value.replace(/[^0-9.]/g, '');
  
  // Allow only one decimal point
  const parts = clean.split('.');
  if (parts.length > 2) {
    clean = parts[0] + '.' + parts.slice(1).join('');
  }
  
  // Limit to 2 decimal places
  if (parts.length > 1 && parts[1].length > 2) {
    clean = parts[0] + '.' + parts[1].substring(0, 2);
  }
  
  return clean;
}

/**
 * Restricts input to positive integer digits only
 */
function sanitizeInteger(value) {
  return value.replace(/[^0-9]/g, '');
}

/**
 * Restricts custom tip to integer digits between 0 and 100
 */
function sanitizeTip(value) {
  let clean = value.replace(/[^0-9]/g, '');
  if (clean !== '') {
    const num = parseInt(clean, 10);
    if (num > 100) return '100';
    return num.toString();
  }
  return clean;
}

// ==========================================================================
// INLINE VALIDATION ACTIONS
// ==========================================================================
function showError(inputEl, errorEl, message) {
  errorEl.textContent = message;
  errorEl.classList.add('visible');
  inputEl.classList.add('input-error');
}

function clearError(inputEl, errorEl) {
  errorEl.textContent = '';
  errorEl.classList.remove('visible');
  inputEl.classList.remove('input-error');
}

/**
 * Validates Bill Input
 */
function validateBill() {
  const val = billInput.value;
  if (val === '') {
    showError(billInput, billError, "Can't be empty");
    return false;
  }
  
  const num = parseFloat(val);
  if (num <= 0) {
    showError(billInput, billError, "Can't be zero");
    return false;
  }
  
  clearError(billInput, billError);
  return true;
}

/**
 * Validates People Input
 */
function validatePeople() {
  const val = peopleInput.value;
  if (val === '') {
    showError(peopleInput, peopleError, "Can't be empty");
    return false;
  }
  
  const num = parseInt(val, 10);
  if (num <= 0) {
    showError(peopleInput, peopleError, "Can't be zero");
    return false;
  }
  
  clearError(peopleInput, peopleError);
  return true;
}

/**
 * Validates Custom Tip Input
 */
function validateTip() {
  const val = customTipInput.value;
  if (val !== '') {
    const num = parseInt(val, 10);
    if (num < 0 || num > 100) {
      showError(customTipInput, tipError, "Must be 0-100");
      return false;
    }
  }
  
  clearError(customTipInput, tipError);
  return true;
}

// ==========================================================================
// EVENT LISTENERS CONFIGURATION
// ==========================================================================
function setupEventListeners() {
  // Bill Input Event Listener
  billInput.addEventListener('input', (e) => {
    let rawVal = e.target.value;
    const sanitized = sanitizeDecimal(rawVal);
    
    if (rawVal !== sanitized) {
      billInput.value = sanitized;
      rawVal = sanitized;
    }
    
    state.bill = rawVal === '' ? 0 : parseFloat(rawVal);
    
    validateBill();
    calculateAndRender();
    updateResetButtonState();
  });

  // People Input Event Listener
  peopleInput.addEventListener('input', (e) => {
    let rawVal = e.target.value;
    const sanitized = sanitizeInteger(rawVal);
    
    if (rawVal !== sanitized) {
      peopleInput.value = sanitized;
      rawVal = sanitized;
    }
    
    state.peopleCount = rawVal === '' ? 1 : parseInt(rawVal, 10);
    
    validatePeople();
    calculateAndRender();
    updateResetButtonState();
  });

  // Preset Buttons Click Event Listener
  presetBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Clear active presets
      presetBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      
      // Mark clicked preset as active
      e.target.classList.add('active');
      e.target.setAttribute('aria-pressed', 'true');
      
      // Clear custom tip & custom tip errors
      customTipInput.value = '';
      state.customTip = '';
      clearError(customTipInput, tipError);
      
      // Update state
      state.tipPercent = parseFloat(e.target.dataset.tip);
      
      calculateAndRender();
      updateResetButtonState();
    });
  });

  // Custom Tip Input Event Listener
  customTipInput.addEventListener('input', (e) => {
    // Clear active presets
    presetBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    
    let rawVal = e.target.value;
    const sanitized = sanitizeTip(rawVal);
    
    if (rawVal !== sanitized) {
      customTipInput.value = sanitized;
      rawVal = sanitized;
    }
    
    state.customTip = rawVal;
    
    if (rawVal === '') {
      state.tipPercent = 0;
    } else {
      state.tipPercent = parseFloat(rawVal);
    }
    
    validateTip();
    calculateAndRender();
    updateResetButtonState();
  });

  // Clear presets on Custom Tip Focus
  customTipInput.addEventListener('focus', () => {
    presetBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    if (customTipInput.value !== '') {
      state.tipPercent = parseFloat(customTipInput.value) || 0;
    } else {
      state.tipPercent = 0;
    }
    validateTip();
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

  // Check if inputs have active validation error classes
  const hasErrors = billInput.classList.contains('input-error') || 
                    peopleInput.classList.contains('input-error') || 
                    customTipInput.classList.contains('input-error');

  // Verify numerical viability
  const isBillViable = !isNaN(billVal) && billVal > 0 && billInput.value !== '';
  const isPeopleViable = !isNaN(peopleVal) && peopleVal > 0 && peopleInput.value !== '';
  const isTipViable = !isNaN(tipVal) && tipVal >= 0;

  if (hasErrors || !isBillViable || !isPeopleViable || !isTipViable) {
    updateResultText(tipAmountResult, 0);
    updateResultText(totalResult, 0);
    return;
  }

  // Calculate
  const totalTip = billVal * (tipVal / 100);
  const grandTotal = billVal + totalTip;

  const tipPerPerson = totalTip / peopleVal;
  const totalPerPerson = grandTotal / peopleVal;

  // Format to standard 2 decimal financial format and update
  updateResultText(tipAmountResult, tipPerPerson);
  updateResultText(totalResult, totalPerPerson);
}

/**
 * Formats a number to currency string, e.g., 4.2833 -> $4.28
 */
function formatCurrency(value) {
  return '$' + value.toFixed(2);
}

/**
 * Updates result element text content and scales typography to prevent clipping
 */
function updateResultText(element, value) {
  const formatted = formatCurrency(value);
  element.textContent = formatted;
  
  // Responsive typography sizing depending on digit count
  const charCount = formatted.length;
  
  if (charCount > 11) {
    element.style.setProperty('--result-font-size', '1.0rem');
    element.style.setProperty('--result-font-size-desktop', '1.4rem');
  } else if (charCount > 8) {
    element.style.setProperty('--result-font-size', '1.2rem');
    element.style.setProperty('--result-font-size-desktop', '1.7rem');
  } else if (charCount > 6) {
    element.style.setProperty('--result-font-size', '1.5rem');
    element.style.setProperty('--result-font-size-desktop', '2.2rem');
  } else {
    element.style.removeProperty('--result-font-size');
    element.style.removeProperty('--result-font-size-desktop');
  }
}

/**
 * Checks if the reset button should be enabled/disabled
 */
function updateResetButtonState() {
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
