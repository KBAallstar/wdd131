const lastModified = document.lastModified;
const tempC = 5;
const windKmpH = 20;
const calculateWindChill = (t, v) =>  13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

// set lastModified text in footer
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// set temp and wind speed texts
document.getElementById("tempC").textContent = `${tempC}°C`;
document.getElementById("windSpeed").textContent = `${windKmpH} km/h`;

// check then set wind chill text in weather box
if (tempC <= 10 && windKmpH > 4.8) {
  const windChill = calculateWindChill(tempC, windKmpH).toFixed(1);
  document.getElementById("windChill").textContent = `${windChill}°C`;
} else {
  document.getElementById("windChill").textContent = "N/A";
}
