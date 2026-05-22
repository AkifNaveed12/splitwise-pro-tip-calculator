# SplitWise Pro — Tip & Bill Splitter

**SplitWise Pro** is a modern, responsive, and accessibility-compliant tip calculator and bill-splitting application built using HTML5, CSS3, and Vanilla JavaScript. 

Inspired by professional fintech user interfaces, it provides a clean, clutter-free experience that calculates tip shares and grand totals in real-time, validates entries inline, and sanitizes input inputs dynamically.

---

## 🌟 Key Features

- **Real-Time Calculations**: Computes tip shares and total bills per person instantly as you type.
- **Robust Input Sanitization**: Intercepts keystrokes to restrict input types (enforces decimals on bills, integers on people counts, and caps custom tips at 100%).
- **Inline Validation**: Displays clear, non-intrusive warnings ("Can't be empty", "Can't be zero") inline alongside input labels to prevent layout shifts.
- **Dynamic Text Scaling**: Automatically resizes currency readouts dynamically when large digits are inputted to prevent layout clipping and word wrapping on small viewports.
- **Accessibility Optimized**: Integrates WCAG AA contrast compliance (`4.5:1`+ ratio), `:focus-visible` keyboard rings, and `aria-pressed` states on button preset toggles.
- **Responsive Mobile-First Design**: Adapts gracefully from mobile viewports (stacked layout) to tablet and desktop viewports (two-column card grid).

---

## 📁 Project Directory Structure

```txt
splitwise-pro-tip-calculator/
│
├── index.html       # Semantic UI markup
├── styles.css       # Mobile-first design system & layout styling
├── script.js        # State, validation, sanitization & calculations
│
├── README.md        # Project setup & run guide
├── ANSWERS.md       # Assessment responses
│
├── docs/            # Technical specifications
│   ├── idea.md
│   ├── planning.md
│   ├── context.md
│   ├── architecture.md
│   ├── userflows.md
│   └── design.md
│
├── assets/          # Static mockup reference files
│
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
You only need a modern web browser to run the application. No node modules, servers, or compilation tools are required.

### Run Locally
To run the app locally, simply open `index.html` in your browser.

Alternatively, you can run a local web server (like Python or NPM `http-server`):
```bash
# Using Python
python -m http.server 8000

# Using Node (http-server)
npx http-server
```
Then navigate to `http://localhost:8000` (or the port specified by http-server).

---

## 🧪 Testing Checklist

During development, the following test matrix was run and verified:
1. **Keystroke Filter**: Ensure typing letters inside Bill, People, or Custom Tip is blocked.
2. **Decimal Limiter**: Verify entering `15.555` inside Bill is sanitized to `15.55`.
3. **Preset Clears**: Confirm typing a Custom Tip clears selected tip presets, and vice versa.
4. **Error Toggling**: Clear inputs to verify "Can't be empty" appears. Enter `0` to verify "Can't be zero" appears.
5. **No Layout Shift**: Verify error displays do not cause other inputs to jump vertically.
6. **Clipping Fix**: Enter `$10,000,000.00` to verify text scales down elegantly on one line.
7. **Reset flow**: Click RESET to verify all variables revert to default settings.

---

## 📄 License

Developed as part of the SplitWise Pro Internship Assessment. All rights reserved.
