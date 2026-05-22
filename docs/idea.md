# SplitWise Pro — Product Idea Document

## Project Overview

SplitWise Pro is a responsive real-time tip calculator and bill splitting web application built using HTML, CSS, and Vanilla JavaScript.

The application allows users to:

- Enter a bill amount
- Select or enter a custom tip percentage
- Specify the number of people sharing the bill
- Instantly calculate:
  - Total tip amount
  - Grand total
  - Per-person share

The project focuses heavily on frontend interaction quality, responsive behavior, accessibility, validation handling, and polished user experience.

---

# Core Objectives

## Primary Goals

- Deliver a smooth real-time calculation experience
- Build a professional responsive UI
- Handle edge cases gracefully
- Demonstrate strong frontend engineering practices
- Ensure accessibility and keyboard usability
- Maintain clean project structure and documentation

---

# Functional Requirements

## Inputs

### Bill Amount

- Positive numeric input
- Currency clearly labeled
- Inline validation support

### Tip Percentage

- Preset buttons:
  - 10%
  - 15%
  - 20%
- Custom tip percentage input
- Active preset visual state

### Number of People

- Positive integer input
- Inline validation support

---

# Outputs

The application must display:

- Total Tip Amount
- Grand Total
- Per-Person Share

All outputs update instantly as the user types.

---

# Validation Rules

## Bill Amount

- Required
- Must be greater than 0

## Tip Percentage

- Minimum: 0
- Maximum: 100

## Number of People

- Must be an integer
- Minimum: 1

---

# UX Philosophy

The project follows a:

- minimal
- modern
- professional
- fintech-inspired

design philosophy.

Key UX priorities:

- smooth live updates
- stable layout
- responsive interactions
- non-intrusive validation
- accessibility-first thinking

---

# Edge Cases Considered

- Empty inputs
- Negative numbers
- Zero people
- Decimal people count
- Very large numbers
- Invalid pasted text
- Rapid input changes
- Mobile keyboard overlap
- Reset state restoration

---

# Accessibility Considerations

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Accessible labels
- Proper contrast ratios
- aria-live updates for results

---

# Responsive Strategy

## Mobile First

The application is designed mobile-first and enhanced for larger screens.

### Mobile Layout

- Vertical stacked layout

### Desktop Layout

- Split two-column card layout

---

# Rounding Policy

Financial values are rounded to 2 decimal places using standard rounding behavior.

---

# Technical Stack

- HTML5
- CSS3
- Vanilla JavaScript

---

# Project Folder Structure

```txt
splitwise-pro-tip-calculator/
│
├── index.html
├── styles.css
├── script.js
│
├── README.md
├── ANSWERS.md
│
├── docs/
│   ├── idea.md
│   ├── planning.md
│   ├── context.md
│   ├── architecture.md
│   ├── userflows.md
│   └── design.md
│
├── assets/
│
└── .gitignore
```

---

# Scope Boundaries

## Included

- Responsive frontend application
- Real-time calculations
- Inline validation
- Accessibility improvements
- Deployment readiness

## Excluded

- Backend
- Authentication
- Database
- Persistent storage
- User accounts
- API integrations

---

# Success Criteria

The project will be considered successful if:

- interactions feel smooth and polished
- edge cases are handled gracefully
- responsive behavior is strong
- validation UX feels professional
- codebase remains clean and maintainable
- documentation clearly communicates engineering decisions
