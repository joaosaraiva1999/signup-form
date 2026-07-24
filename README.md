# Studio Auth — Sign in & Create account

A warm, responsive authentication experience for a creative studio workspace. This project pairs a calm editorial visual language with the familiar interaction patterns users expect from a modern sign-in and registration flow.

The interface is intentionally lightweight: it runs directly in the browser, has no build step, and keeps the focus on thoughtful UI details, accessible form affordances, and clean front-end fundamentals.

## Why this project stands out

- **Two connected flows:** users can move between Sign In and Create account without losing the visual context of the experience.
- **Useful interaction details:** password visibility toggling, a live password-strength meter, inline strength labels, and responsive hover states make the forms feel considered rather than static.
- **Clear visual hierarchy:** Fraunces brings an editorial character to headings while Geist keeps labels and controls crisp and readable.
- **Responsive by default:** the card uses fluid sizing and a viewport-aware layout so the experience remains centered and usable across screen sizes.
- **Honest product scaffolding:** social sign-in, SSO, password recovery, terms, and privacy entry points are represented in the UI, ready to be connected to real services.

## Preview

Open either page locally to explore the experience:

- [Sign in](signin.html)
- [Create account](signup.html)

## Features

### Sign-in flow

- Email and password fields
- “Keep me signed in” option
- Password visibility toggle
- Forgot-password entry point
- Social sign-in and SSO presentation
- Terms of Service and Privacy Policy acknowledgement

### Registration flow

- Full name, email, password, and password confirmation fields
- Password visibility toggle
- Live password-strength feedback based on length, case, numbers, and symbols
- Strength meter with Weak, Fair, Good, and Strong states
- Alternate sign-up methods presented consistently with the sign-in screen

## Tech stack

- **HTML5** for semantic page structure and form controls
- **CSS3** for the responsive layout, design tokens, gradients, states, and typography
- **Vanilla JavaScript** for page-aware navigation styling, password visibility, and strength scoring
- **Lucide** for interface icons
- **Modern Normalize** for a consistent browser baseline
- **Google Fonts** for Fraunces and Geist

## Project structure

```text
.
├── assets/
│   └── style.css       # Shared visual system and responsive layout
├── scripts/
│   └── script.js       # Form interactions and password-strength logic
├── signin.html         # Sign-in experience
├── signup.html         # Account creation experience
└── README.md
```

## Run locally

No installation or build process is required.

1. Clone the repository.
2. Open `signin.html` or `signup.html` in a browser.

For a local server, run this from the project directory:

```bash
python -m http.server 8000
```

Then visit [http://localhost:8000/signin.html](http://localhost:8000/signin.html).

Using a local server is useful when testing navigation and external assets in a browser-like environment.

## Implementation notes

The project deliberately keeps the JavaScript small and framework-free. `script.js` detects which page is active, highlights the corresponding tab, toggles the password field between masked and visible states, and calculates password feedback as the user types.

The current repository is a front-end prototype. Form submission, authentication, account persistence, social providers, SSO, password recovery, and legal-document links still need to be connected to product services before production use. The UI is structured so those integrations can be added without changing the core visual system.

## Suggested next steps

- Add `label` elements, stable `id`/`name` attributes, and explicit validation messages for production-grade accessibility.
- Connect the forms to an authentication API and handle loading, success, and error states.
- Make the social, SSO, password-recovery, terms, and privacy actions functional.
- Add automated checks for password rules, navigation, and responsive rendering.
- Self-host critical fonts and icons if the project needs stronger offline performance or stricter privacy controls.

## About the work

This project demonstrates the ability to turn a simple authentication requirement into a coherent product surface: reusable styling, page-to-page consistency, responsive composition, and small interactions that improve user confidence. It is a compact example of front-end craftsmanship with clear room for a production integration layer.
