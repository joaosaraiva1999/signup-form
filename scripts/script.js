lucide.createIcons();

const signin_Button = document.querySelector('.signin')
const signup_Button = document.querySelector('.signup')
const password_Input = document.querySelector('.password-input')
const password_toggle = document.querySelector('.password-toggle')
const pwfill = document.querySelector('.pw-fill')
let pwlabel = document.querySelector('#pw-label')


document.URL.includes("signup.html") ? signup_Button.classList.add('button_background') : signin_Button.classList.add('button_background')

function showPassword() {
  if (password_Input.type === 'password') {
    password_Input.type = 'text'
    password_toggle.innerText = 'Hide'
  } else {
    password_Input.type = 'password'
    password_toggle.innerText = 'Show'
  }
}


if (document.URL.includes("signup.html")) {
  password_Input.addEventListener('input', () => {

    const value = password_Input.value
    let score = 0

    if (value.length >= 8) score++;
    if (/[A-Z]/.test(value) && /[a-z]/.test(value)) score++;
    if (/[0-9]/.test(value)) score++;
    if (/[^A-Za-z0-9]/.test(value)) score++;
    if (/^(?=[A-Z])[A-Z\s]+$/.test(value)) score++;

    const widths = ['0%', '25%', '50%', '75%', '100%'];
    const colors = ['#ddd0c0', '#c8362f', '#e03055', '#ff4b2b', '#2d8659'];
    const labels = ['', 'Weak', 'Fair', 'Good', 'Strong'];

    pwfill.style.width = widths[score]
    pwfill.style.background = colors[score]
    pwlabel.textContent = labels[score]

  })
}


