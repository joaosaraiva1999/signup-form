# Studio Auth — Sign in and Create account

A small front-end project for a clean sign-in and account creation experience. I built it as a simple exercise in layout, typography, form details, and responsive styling without using a framework.

## What is included

- Sign-in and create-account pages with shared styling
- Responsive card layout for desktop and smaller screens
- Native HTML form validation for required fields, email format, and password rules
- Show/hide password control
- Password-strength indicator on the create-account page
- Sign-in, social-login, SSO, terms, and privacy UI elements

## Built with

- HTML5
- CSS3
- Vanilla JavaScript for the small UI interactions
- Lucide icons
- Fraunces and Geist fonts

## Files

```text
.
├── assets/
│   └── style.css
├── scripts/
│   └── script.js
├── signin.html
├── signup.html
└── README.md
```

## A few implementation notes

The forms use browser-native validation. Email fields use `type="email"`, the important fields are required, and passwords have length and character requirements through HTML attributes. No JavaScript is used to decide whether a field is valid.

The JavaScript that is already in the project is only used for the password visibility button, the active page tab, and the password-strength display. The forms are still a front-end demo: they do not send data to an authentication service yet, and the social-login, SSO, forgot-password, terms, and privacy links are not connected to real destinations.

The next practical step would be to connect both forms to an API and add server-side validation. The confirm-password check should also be handled there, since matching two fields cannot be done with native HTML validation alone.
