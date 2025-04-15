// Services array
const services = [
  { title: "Recording Session", price: 100, desc: "2-hour session in our premium vocal booth." },
  { title: "Mixing & Mastering", price: 150, desc: "Professional audio polishing for your tracks." },
  { title: "Beat Production", price: 80, desc: "Custom beats tailored to your style." }
];

// Save to localStorage
localStorage.setItem("studioServices", JSON.stringify(services));

// Render services (DOM interaction + array method + template literals)
const container = document.getElementById("servicesContainer");
if (container) {
  const savedServices = JSON.parse(localStorage.getItem("studioServices"));
  savedServices.forEach((service, index) => {
    const block = `
      <div class="service-card">
        <h3>${service.title}</h3>
        <p>${service.desc}</p>
        <p><strong>$${service.price}</strong></p>
      </div>
    `;
    container.innerHTML += block;
  });
}

// Form handling (DOM interaction, conditional branching, functions)
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("message").value.trim();

    if (name && email && msg) {
      document.getElementById("responseMessage").innerHTML =
        `<p>Thanks, ${name}! We’ll contact you soon.</p>`;
    } else {
      document.getElementById("responseMessage").innerHTML =
        `<p>Please complete all fields.</p>`;
    }
  });
}

const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
