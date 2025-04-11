// Sample product array to populate the select options
const products = [
  { id: "product1", name: "Durability" },
  { id: "product2", name: "Ease of use" },
  { id: "product3", name: "Performance" },
  { id: "product4", name: "Design" }
];

// Populate the product select dropdown dynamically
const productSelect = document.getElementById('product');
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Load review count from localStorage and update the counter on confirmation page
if (!localStorage.getItem('reviewCount')) {
  localStorage.setItem('reviewCount', 0);
}

// Update the review counter on the confirmation page
let reviewCount = parseInt(localStorage.getItem('reviewCount'));
document.getElementById('reviewCounter').textContent = reviewCount;

// Increment the review count in localStorage
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);

const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;
