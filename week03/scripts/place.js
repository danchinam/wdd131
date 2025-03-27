const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

window.onload = function() {
  const temperature = parseFloat(document.getElementById('temperature').innerText);
  const windSpeed = parseFloat(document.getElementById('windspeed').innerText);

  function calculateWindChill(temperature, windSpeed) {
    if (windSpeed < 3) {
      return "Wind chill is not calculated for wind speeds below 3 mph";
  }

  const windChill = 35.74 + (0.6215 * temperature) - 35.75 * Math.pow(windSpeed, 0.16) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
  return windChill.toFixed(2) + "°F";
}
const windChill = calculateWindChill(temperature, windSpeed);
document.getElementById('windchill').innerText = "Wind Chill: " + windChill;
};

function calculateWindChill(temperature, windSpeed, isCelsius = false) {
  return isCelsius ? 
      (13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2) + "°C" :
      (35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16))).toFixed(2) + "°F";
}
