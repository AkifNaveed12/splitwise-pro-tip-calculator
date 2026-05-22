# SplitWise Pro — Development Planning Document

# Development Philosophy

The project will be developed incrementally while ensuring:

- deployable state after every major task
- stable UI behavior
- modular implementation
- continuous testing
- proper documentation updates

---

# Phase 1 — Project Initialization

## T1.1 Create Repository

- Create GitHub repository
- Configure local project folder

## T1.2 Create Folder Structure

- Create root files
- Create docs directory
- Create assets directory

## T1.3 Create Documentation

- Add all markdown documentation files
- Populate initial project planning content

## T1.4 Initial Git Commit

Commit:
"Initialize project planning and documentation structure"

---

# Phase 2 — UI Foundation

## T2.1 Build HTML Skeleton

Tasks:

- Add semantic page structure
- Add header section
- Add input section
- Add output section
- Add reset button

Testing:

- Verify semantic structure
- Verify layout hierarchy

---

## T2.2 Create CSS Reset and Variables

Tasks:

- CSS reset
- Define color variables
- Define spacing variables
- Define typography system

Testing:

- Verify consistent rendering

---

## T2.3 Build Mobile Layout

Tasks:

- Vertical mobile-first layout
- Input styling
- Button styling
- Results panel styling

Testing:

- Test mobile responsiveness
- Test viewport overflow

---

## T2.4 Build Desktop Responsive Layout

Tasks:

- Two-column split layout
- Improve spacing
- Optimize alignment

Testing:

- Verify desktop responsiveness
- Verify breakpoint transitions

---

## T2.5 Add Hover and Focus States

Tasks:

- Focus rings
- Hover transitions
- Active button states

Testing:

- Keyboard navigation
- Accessibility focus visibility

---

## T2.6 Update context.md

## T2.7 Git Commit

Commit:
"Build responsive UI foundation"

---

# Phase 3 — State and Logic

## T3.1 Create State Object

Tasks:

- Centralize application state
- Define default state structure

Testing:

- Verify state updates correctly

---

## T3.2 Build Calculation Engine

Tasks:

- Tip calculation
- Grand total calculation
- Per-person calculation

Testing:

- Verify mathematical accuracy
- Verify rounding behavior

---

## T3.3 Implement Live Updates

Tasks:

- Attach input event listeners
- Trigger recalculations on input

Testing:

- Verify smooth live updates
- Verify no flickering

---

## T3.4 Implement Tip Button Logic

Tasks:

- Active preset switching
- Custom tip override logic

Testing:

- Verify state synchronization

---

## T3.5 Implement Reset Logic

Tasks:

- Clear state
- Clear inputs
- Reset outputs
- Reset active states

Testing:

- Verify complete reset behavior

---

## T3.6 Update context.md

## T3.7 Git Commit

Commit:
"Implement calculation engine and state management"

---

# Phase 4 — Validation and Sanitization

## T4.1 Bill Validation

Tasks:

- Positive number validation
- Empty input handling

Testing:

- Negative values
- Zero values
- Empty state

---

## T4.2 Tip Validation

Tasks:

- Range validation
- Custom tip validation

Testing:

- Large values
- Invalid pasted input

---

## T4.3 People Count Validation

Tasks:

- Integer validation
- Minimum value validation

Testing:

- Decimal input
- Zero people
- Negative values

---

## T4.4 Inline Error System

Tasks:

- Error message rendering
- Reserved layout space
- Smooth visibility transitions

Testing:

- Error appearance/disappearance
- Layout stability

---

## T4.5 Input Sanitization

Tasks:

- Prevent invalid pasted text
- Handle progressive typing states

Testing:

- Rapid typing
- Mixed character paste

---

## T4.6 Update context.md

## T4.7 Git Commit

Commit:
"Add validation and input sanitization system"

---

# Phase 5 — Accessibility and UX Polish

## T5.1 Accessibility Improvements

Tasks:

- aria-labels
- aria-live regions
- semantic improvements

Testing:

- Keyboard navigation
- Screen reader compatibility

---

## T5.2 UX Refinements

Tasks:

- Smooth transitions
- Better spacing
- Result emphasis
- Visual hierarchy refinement

Testing:

- Real-device interaction checks

---

## T5.3 Performance Cleanup

Tasks:

- Remove redundant logic
- Simplify functions
- Optimize event handling

Testing:

- Ensure calculations remain stable

---

## T5.4 Cross Device Testing

Test Devices:

- 360px mobile
- Tablet
- Desktop

Testing Areas:

- Layout behavior
- Keyboard usability
- Responsive scaling

---

## T5.5 Final Bug Testing

Test Cases:

- Empty input
- Invalid values
- Large numbers
- Rapid edits
- Reset behavior

---

## T5.6 Update context.md

## T5.7 Git Commit

Commit:
"Improve accessibility, responsiveness, and UX polish"

---

# Phase 6 — Documentation and Deployment

## T6.1 Create README.md

Tasks:

- Installation instructions
- Run instructions
- Deployment URL

---

## T6.2 Create ANSWERS.md

Tasks:

- Answer all assessment questions
- Explain design decisions
- Explain AI usage transparently

---

## T6.3 Prepare architecture.md

Tasks:

- Add Mermaid diagrams
- Document state flow

---

## T6.4 Prepare userflows.md

Tasks:

- Add interaction flows
- Add validation flows

---

## T6.5 Prepare design.md

Tasks:

- Typography system
- Color palette
- Accessibility rationale

---

## T6.6 Deployment Preparation

Tasks:

- Final cleanup
- Ensure deploy-ready structure

Testing:

- Final production test

---

## T6.7 Deploy to Vercel

---

## T6.8 Final Repository Review

Checklist:

- Clean commit history
- No dead files
- No console errors
- Working deployment

---

## T6.9 Update context.md

---

## T6.10 Final Git Commit

Commit:
"Finalize deployment and project documentation"
