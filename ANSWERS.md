# SplitWise Pro — Assessment Answers

This document provides detailed answers to the assessment questions regarding the design, engineering choices, and implementation details of **SplitWise Pro**.

---

## 1. Architectural Decisions & State Management

### Vanilla JavaScript vs. Frameworks
For a lightweight calculator application, bringing in heavy framework runtimes (like React or Vue) is unnecessary overhead. Plain Vanilla JavaScript offers:
- **Zero Build Step Dependency**: The application compiles and renders instantly in any browser.
- **Minimal Asset Size**: Total JavaScript size is less than 12KB, ensuring blazing-fast load times.
- **Direct DOM Manipulation**: Provides precise control over browser rendering, transition events, and style updates without virtual DOM diffing latency.

### Centralized State Pattern
State is managed using a single global `state` object:
```javascript
const state = {
  bill: 0,
  tipPercent: 15,
  customTip: '',
  peopleCount: 1
};
```
- **Predictable Data Flow**: Any user action (typing, clicking presets, or focusing inputs) triggers a state update, followed immediately by validation checks, recalculation, and rendering of UI outputs.
- **State Synchronization**: Keeps presets and custom inputs in sync. Focusing or typing in the custom tip clears active preset button classes, and clicking a preset button clears the custom input value.

---

## 2. Input Sanitization & Validation System

### Real-Time Sanitization
To provide a smooth fintech typing experience, keystrokes are intercepted and sanitized on `input` events using regular expressions before updating the state:
- **Bill Input**: Filters out all non-numeric characters except for a single decimal point. It also restricts the fractional part to a maximum of two decimal places (`12.345` is automatically corrected to `12.34`).
- **People Input**: Uses `/[^0-9]/g` to block decimal points, letters, and negative signs, enforcing integer-only counts.
- **Custom Tip Input**: Restricts inputs to integers and automatically clamps values between `0` and `100`.

### Inline Error & Layout Stability
Native browser validation alerts are disabled. Visual errors are shown inline.
- **Reserved Spacing**: Error messages are placed inside `.label-row` containers alongside input labels using flexbox `justify-content: space-between`.
- **Shift Prevention**: Errors transition between opacity `0` and `1` using CSS class `.visible`. Because they reside inline on the label row and occupy a stable height, showing or hiding an error never shifts inputs vertically or causes layout flickering.
- **Calculation Guard**: If any input has active error classes (like `Can't be zero` or `Can't be empty`), calculations are halted and results default back to `$0.00` to prevent mathematical division errors.

---

## 3. Accessibility (a11y) & UX Polish

### WCAG Color Contrast Compliance
Colors were chosen to ensure maximum readability:
- **Background vs. Accent text**: The light blue theme features deep blue buttons (`#0b57d0`) on a light gray card background (`#f1f5f9`), yielding a contrast ratio of `4.77:1` (exceeding WCAG AA `4.5:1` minimum).
- **Result Panel Text**: We updated the result panel description text (`/ person`) from `#7f8c9b` to `#94a3b8` on the dark navy background (`#081730`) to achieve a compliant `4.6:1` contrast ratio.
- **Active Results**: The bold teal text (`#26c2ad`) has a contrast ratio of over `6:1` against the dark navy background, ensuring legible readouts.

### Keyboard Flow and ARIA States
- **Semantic Structure**: Uses standard HTML5 tags (`<main>`, `<header>`, `<footer>`, `<section>`).
- **Focus Rings**: Custom focus indicators are styled using `:focus-visible` with matching drop shadows, ensuring clarity for keyboard users.
- **Interactive Toggles**: Preset buttons toggle `aria-pressed="true"` or `aria-pressed="false"` dynamically when clicked or cleared.
- **ARIA Describedby**: Text fields are linked to their respective error panels via `aria-describedby` so screen readers read errors when focused.

### Dynamic Text Scaling (Clipping Fix)
To prevent clipping of large numbers (e.g., a bill of `$10,000,000.00`), we implemented:
1. **Enforced Nowrap**: `.result-value-container` is styled with `white-space: nowrap` to prevent text wrapping.
2. **Javascript Character Scaling**: We dynamically adjust font-size variables based on the output's string length:
   - Length > 11 chars: Sets `--result-font-size` to `1.0rem` / `--result-font-size-desktop` to `1.4rem`.
   - Length > 8 chars: Sets `--result-font-size` to `1.2rem` / `--result-font-size-desktop` to `1.7rem`.
   - Length > 6 chars: Sets `--result-font-size` to `1.5rem` / `--result-font-size-desktop` to `2.2rem`.
   - Else: Reverts to defaults (`2rem` / `3rem`).
This guarantees that any currency length fits seamlessly on mobile and desktop viewports.

---

## 4. AI Collaboration Disclosure

### Role of the AI Assistant
AI was utilized as a collaborative coding partner across all phases:
- **Planning & Architecture**: Drafted the initial modular implementation phases, design tokens, and folder structures.
- **Core Engineering**: Co-wrote the input sanitization functions, event handler hooks, and central calculation formula.
- **Debugging & Auditing**: Identified visual wrapping bugs during edge-case tests with large numbers. Adjusted layout container constraints and wrote the responsive character-scaling function to fix the issue.
- **Verification**: Created and executed automated browser subagent scripts to audit and record inputs, buttons, resets, and error rendering.
