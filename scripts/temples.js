const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.getElementById("currentyear").textContent = `© ${currentYear}, Tyler Hatton, United States`;
document.getElementById("last-modified").textContent = `Last Modified: ${lastModified}`;

const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  const isVisible = navMenu.style.display === "flex";
  navMenu.style.display = isVisible ? "none" : "flex";
  menuButton.innerHTML = isVisible ? "&#9776;" : "✖";
});
