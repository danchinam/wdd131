const heightoutput = document.querySelector("#height");
const widthoutput = document.querySelector("#width");

function updateSize() {
  heightoutput.textContent = window.innerHeight;
  widthoutput.textContent = window.innerWidth;
}

updateSize(); // Initial call to set the size on page load
window.addEventListener("resize", updateSize);
