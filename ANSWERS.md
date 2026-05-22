# SplitWise Pro — Assessment Answers

## 1. How to Run

### Run Locally

1. Download or clone the repository
2. Open the project folder
3. Open `index.html` in any modern browser

No additional installations or dependencies are required.

### Optional Local Server

You can also run it using VS Code Live Server or Python:

```bash
python -m http.server 8000
```

Then open:

```txt
http://localhost:8000
```

### Deployment

Deployed URL:
https://portfolio-muhammad-akif-naveed.vercel.app/

---

## 2. Stack & Design Choices

### Why I Picked This Stack

I used:

- HTML
- CSS
- Vanilla JavaScript

because the project is relatively small and focused mostly on frontend interactions and responsiveness. I wanted to keep the app lightweight without adding unnecessary frameworks or build tools.

Vanilla JavaScript also helped me understand and control the DOM interactions more directly.

---

### Design Decision 1 — Split Result Panel

I separated the results section into a darker right-side panel on desktop screens to make the calculated values more visually noticeable.

This improves readability and gives more importance to the final amounts users care about most.

---

### Design Decision 2 — Preset Tip Button Grid

I used a button grid layout for the preset tip percentages instead of a dropdown because it makes tip selection faster and easier, especially on mobile devices.

The active button is highlighted clearly so users always know which tip percentage is selected.

---

## 3. Responsive & Accessibility

### Responsive Behavior

On small mobile screens (around 360px):

- the layout stacks vertically
- buttons become touch-friendly
- spacing adjusts for smaller screens

On larger desktop screens (1440px):

- the layout changes into a two-column card design
- the input section and result section are displayed side-by-side

---

### Accessibility Consideration Implemented

I added:

- visible keyboard focus states
- semantic HTML structure
- accessible labels for inputs

This improves keyboard navigation and usability.

---

### Accessibility Consideration I Skipped

I did not fully test the application using screen reader software due to time limitations.

With more time, I would improve and test screen reader support more thoroughly.

---

## 4. AI Usage

### AI Tools Used

I used AI tools during:

- project planning
- UI inspiration
- frontend development
- debugging
- validation logic improvements
- documentation writing

Tools used:

- ChatGPT
- Antigravity
- Google Stitch

---

### What I Used Them For

#### ChatGPT

I used ChatGPT mainly for:

- planning the project structure
- deciding the folder organization
- breaking development into smaller tasks
- discussing validation and responsive behavior
- generating initial documentation drafts

It also helped me think through edge cases like:

- zero people
- invalid inputs
- large result values
- responsive layout behavior

---

#### Antigravity

I used Antigravity during development for:

- generating initial HTML structure
- helping with CSS layout setup
- improving validation logic
- refining responsive behavior

I developed the project module-by-module instead of generating everything at once.

---

#### Google Stitch

I used Google Stitch for:

- mobile UI inspiration
- desktop layout inspiration
- spacing and visual hierarchy ideas

I mainly used it as a design reference rather than directly copying generated code.

---

### Specific Changes I Made To AI Output

One issue in the initial AI-generated layout was that very large result values caused the last digits to become hidden or clipped on smaller widths.

I manually adjusted the CSS sizing and alignment to ensure large numbers remained visible properly.

Another issue was that some spacing and alignment felt inconsistent between the mobile and desktop layouts, so I refined the spacing manually and adjusted section alignment.

I also corrected the app naming in the header and footer because the generated version used inconsistent names in some places.

Additionally, I simplified some generated structure and styling because a few parts initially felt overcomplicated for a small frontend project.

---

## 5. Honest Gap

One thing that still needs improvement is more advanced animation and transition polish between validation states.

If I had another day, I would improve:

- micro interactions
- smoother validation transitions
- additional responsive refinements
- more accessibility testing
