# SplitWise Pro — Architecture Documentation

# System Architecture Overview

The application follows a lightweight frontend-only architecture using:

- HTML for structure
- CSS for presentation
- Vanilla JavaScript for state and interaction logic

---

# High-Level Architecture

```mermaid
flowchart TD

A[User Input] --> B[State Update]
B --> C[Validation Layer]
C --> D[Calculation Engine]
D --> E[UI Rendering]
E --> F[Live Result Display]
```

---

# Component Architecture

```mermaid
flowchart LR

A[Header Section]

B[Input Panel]
C[Bill Input]
D[Tip Buttons]
E[Custom Tip Input]
F[People Count Input]

G[Results Panel]
H[Tip Amount]
I[Grand Total]
J[Per Person Share]

K[Reset Button]

B --> C
B --> D
B --> E
B --> F

G --> H
G --> I
G --> J
```

---

# State Management Flow

```mermaid
flowchart TD

A[User Interaction]
--> B[Event Listener]

B --> C[Update State Object]

C --> D[Run Validation]

D --> E[Calculate Totals]

E --> F[Render UI]

F --> G[Update Results]
```

---

# Validation Flow

```mermaid
flowchart TD

A[Input Change]
--> B{Valid Input?}

B -->|Yes| C[Remove Error State]
B -->|No| D[Display Inline Error]

C --> E[Update Results]
D --> F[Prevent Invalid Calculation]
```

---

# Reset Flow

```mermaid
flowchart TD

A[Reset Button Click]
--> B[Clear Inputs]

B --> C[Reset State]

C --> D[Clear Errors]

D --> E[Reset Outputs]

E --> F[Restore Default UI]
```

---

# Calculation Flow

```mermaid
flowchart TD

A[Bill Amount]
--> D[Tip Calculation]

B[Tip Percentage]
--> D

D --> E[Grand Total]

C[People Count]
--> F[Per Person Calculation]

E --> F

F --> G[Display Results]
```

---

# Folder Architecture

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

# Design Principles

The architecture prioritizes:

- simplicity
- maintainability
- responsiveness
- accessibility
- interaction quality
- deployment readiness

---

# Future Scalability Considerations

The current structure can later scale into:

- component-based architecture
- API integration
- persistent storage
- authentication system
- framework migration if needed
