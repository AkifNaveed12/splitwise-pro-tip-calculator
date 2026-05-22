# SplitWise Pro — User Flow Documentation

# User Interaction Philosophy

The application is designed around:

- real-time responsiveness
- smooth interaction flow
- minimal friction
- clear feedback
- stable validation behavior

---

# Primary User Flow

```mermaid
flowchart TD

A[User Opens Application]
--> B[Enter Bill Amount]

B --> C[Select Tip Percentage]

C --> D[Enter Number of People]

D --> E[Live Calculations Trigger]

E --> F[Display Results]

F --> G[Optional Reset]
```

---

# Bill Input Flow

```mermaid
flowchart TD

A[User Types Bill Amount]
--> B{Valid Number?}

B -->|Yes| C[Update State]
B -->|No| D[Show Inline Error]

C --> E[Recalculate Totals]
```

---

# Tip Selection Flow

```mermaid
flowchart TD

A[User Clicks Tip Preset]
--> B[Activate Selected Button]

B --> C[Deactivate Other Buttons]

C --> D[Update Tip State]

D --> E[Recalculate Results]
```

---

# Custom Tip Flow

```mermaid
flowchart TD

A[User Types Custom Tip]
--> B[Clear Active Preset]

B --> C[Validate Custom Value]

C --> D[Update State]

D --> E[Recalculate Results]
```

---

# Validation Interaction Flow

```mermaid
flowchart TD

A[Input Event]
--> B[Validation Check]

B -->|Valid| C[Hide Error]

B -->|Invalid| D[Show Inline Error]

C --> E[Continue Calculations]

D --> F[Prevent Invalid Result Display]
```

---

# Reset Interaction Flow

```mermaid
flowchart TD

A[User Clicks Reset]
--> B[Clear Inputs]

B --> C[Reset State]

C --> D[Remove Errors]

D --> E[Restore Default Outputs]
```

---

# Responsive User Flow

```mermaid
flowchart TD

A[Open App on Device]
--> B{Viewport Size}

B -->|Mobile| C[Vertical Layout]

B -->|Desktop| D[Two Column Layout]
```

---

# Accessibility User Flow

```mermaid
flowchart TD

A[Keyboard Navigation]
--> B[Focus Inputs]

B --> C[Focus Buttons]

C --> D[Read Result Updates]

D --> E[Reset Application]
```

---

# UX Design Priorities

The user experience prioritizes:

- predictable interactions
- visual clarity
- smooth feedback
- accessibility
- mobile usability
- stable layout behavior
