const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("currentyear").textContent = `© ${currentYear}, Tyler Hatton, United States`;
document.getElementById("last-modified").textContent = `Last Modified: ${lastModified}`;