// DOM manipulation: Change the text of the call-to-action button
document.getElementById('cta-btn').addEventListener('click', function() {
  alert("Thank you for booking! Our team will get in touch with you.");
});

// Using LocalStorage to save user preferences or session data
if (localStorage.getItem('userName')) {
  console.log(`Welcome back, ${localStorage.getItem('userName')}!`);
} else {
  localStorage.setItem('userName', 'Visitor');
}

// Form Validation Example for Contact Form
document.querySelector("form").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) {
      alert("Please fill out all fields.");
      event.preventDefault();  // Prevent form submission
  }
});
