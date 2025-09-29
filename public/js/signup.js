
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginLink = document.getElementById('login-link');
const signupLink = document.getElementById('signup-link');

loginLink.addEventListener('click', (event) => {
    event.preventDefault();
    signupForm.style.display = 'none';
    loginForm.style.display = 'block';

    setTimeout(() => {
        signupForm.style.opacity = 0;
        loginForm.style.opacity = 1;
    }, 10);
});

signupLink.addEventListener('click', (event) => {
    event.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';

    setTimeout(() => {
        loginForm.style.opacity = 0;
        signupForm.style.opacity = 1;
    }, 10);
});
 function togglePassword() {
      const passwordInput = document.getElementById("password");
      const eyeButton = document.querySelector(".toggle-eye");
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeButton.textContent = "🙈"; // change icon when visible
      } else {
        passwordInput.type = "password";
        eyeButton.textContent = "👁"; // change icon back
      }
    }
