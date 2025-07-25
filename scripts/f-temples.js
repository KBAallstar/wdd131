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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Louisville Kentucky",
    location: "Louisville, Kentucky, United States",
    dedicated: "2000, March, 19",
    area: 10700,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/louisville-kentucky-temple/louisville-kentucky-temple-5829-main.jpg"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 30659,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
    templeName: "Taipei Taiwan",
    location: "Taipei, Taiwan",
    dedicated: "1984, November, 18",
    area: 9945,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg"
  },
];

// code to create temple cards
function createTempleCard(filteredTemples) {
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = ""; // clear existing cards

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");
    

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;    
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    gallery.appendChild(card);
  });
}

// code to load the home temples on startup
createTempleCard(temples);

// code to handle navbar filtering
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const filter = link.textContent;

    let filteredTemples;

    switch (filter) {
      case "Old":
        filteredTemples = temples.filter(t => {
          const year = parseInt(t.dedicated.split(",")[0]);
          return year < 1900;
        });
        break;
      case "New":
        filteredTemples = temples.filter(t => {
          const year = parseInt(t.dedicated.split(",")[0]);
          return year > 2000;
        });
        break;
      case "Large":
        filteredTemples = temples.filter(t => t.area > 90000);
        break;
      case "Small":
        filteredTemples = temples.filter(t => t.area < 10000);
        break;
      default: // Home
        filteredTemples = temples;
    }

    document.querySelector("main h2").textContent = filter;
    createTempleCard(filteredTemples);
  });
});
