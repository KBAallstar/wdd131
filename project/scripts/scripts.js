// Get Current Year
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = `© ${currentYear}, Jester FEC`;

// Last modified info for footer
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last Modified: ${lastModified}`;

// Nav button stuff for mobile
const menuButton = document.getElementById("menu");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
  const isVisible = navMenu.style.display === "flex";
  navMenu.style.display = isVisible ? "none" : "flex";
  menuButton.innerHTML = isVisible ? "&#9776;" : "✖";
});

// Might need later
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

window.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("productName");

  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    select.appendChild(option);
  });
});
