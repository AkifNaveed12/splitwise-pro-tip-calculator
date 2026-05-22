# SplitWise Pro — Development Context Log

This document tracks:

- implementation progress
- architectural decisions
- bug fixes
- logic refinements
- UX improvements
- validation changes
- deployment readiness updates

The purpose of this file is to maintain development transparency and engineering traceability throughout the project lifecycle.

---

# Initial Project Context

## Project Objective

Build a responsive real-time tip calculator and bill splitter with:

- smooth interactions
- inline validation
- accessibility support
- responsive design
- polished frontend UX

---

# Development Strategy

The project is being developed incrementally with the following engineering principles:

- stable deployable state after every major task
- modular implementation
- continuous testing
- responsive-first development
- accessibility-first considerations
- maintainable code structure

---

# Architectural Decisions

## Why Vanilla JavaScript?

Vanilla JavaScript was selected because:

- project scope is frontend-focused
- interaction complexity is moderate
- avoids unnecessary framework overhead
- demonstrates frontend fundamentals clearly

---

## Why Mobile-First CSS?

Mobile-first CSS ensures:

- better responsive structure
- cleaner progressive enhancement
- improved mobile usability

---

# Validation Philosophy

Validation should:

- never interrupt typing aggressively
- avoid browser-native tooltips
- remain visually stable
- appear inline near the related field

---

# Accessibility Philosophy

Accessibility considerations include:

- semantic HTML
- visible keyboard focus states
- aria labels
- screen-reader-friendly updates
- sufficient contrast ratios

---

# Logging Rules

Every major implementation stage should append:

- completed task
- modified files
- issues encountered
- fixes applied
- reasoning behind implementation changes

---

# Context Update Template

## Update Title

### Files Modified

- index.html
- styles.css
- script.js

### Changes Made

- Added responsive layout
- Improved validation logic

### Problems Encountered

- Layout overflow on small devices

### Solution Applied

- Adjusted grid sizing and spacing system

### Result

- Stable responsive behavior achieved

---

## Phase 2 — UI Foundation Completion

### Files Modified

- index.html
- styles.css

### Changes Made

- Created semantic HTML skeleton using modern semantic tags and custom SVGs.
- Established global CSS reset and customized fintech design variables.
- Designed mobile-first responsive layout with a split-column layout on desktop.
- Integrated accessibility focus-visible styles and keyboard-friendly focus rings.

### Problems Encountered

- Preventing visual distortion and layout shifting during validation error states.

### Solution Applied

- Placed error message elements inline on the same row as inputs' labels using flexbox spacing. This guarantees the spacing is reserved and stable, avoiding input shifts.

### Result

- Mobile-first layout foundation and styling completed, ready for calculation logic.

---

## Phase 3 — State and Logic Completion

### Files Modified

- script.js

### Changes Made

- Setup centralized global state tracking user selections and entries.
- Built mathematical calculation engine that computes Tip Amount and Total per person with standard 2-decimal financial rounding.
- Implemented real-time calculations that react to input events dynamically.
- Developed preset tip buttons logic and custom tip input handlers that override preset active classes properly.
- Created reset function which restores default values and resets results back to $0.00 while disabling the reset button.

### Problems Encountered

- Making sure the custom tip overrides the active preset button states and vice versa without double counting.

### Solution Applied

- Wired mutual clear listeners. Focusing or typing in the custom tip input clears the `.active` class of preset buttons, and clicking a preset button clears the custom input's text value.

### Result

- Responsive live-calculating engine successfully implemented.
