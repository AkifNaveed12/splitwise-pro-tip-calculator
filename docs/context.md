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
