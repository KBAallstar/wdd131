document.addEventListener("DOMContentLoaded", () => {
  // Footer text updaters
  const yearEl = document.querySelector("#currentyear");
  if (yearEl) yearEl.textContent = `© ${new Date().getFullYear()} Jester FEC`;

  const modEl = document.querySelector("#last-modified");
  if (modEl) modEl.textContent = `Last Modified: ${document.lastModified}`;

  // Mobile nav icon toggle
  const menuButton = document.querySelector("#menu");
  const navMenu = document.querySelector("#nav-menu");
  if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
      const isOpen = navMenu.style.display === "flex";
      navMenu.style.display = isOpen ? "none" : "flex";
      menuButton.innerHTML = isOpen ? "&#9776;" : "✖";
    });
  }

  // Page loader functions
  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "about") initAbout();
  if (page === "contact") initContact();
});

// ---------- HOME ----------
function initHome() {}

// ---------- ABOUT ----------
function initAbout() {
  const team = [
    {
      name: "Terry Hatton",
      role: "Corporate",
      position: "President",
      image: "images/team-terry.webp",
      importance: 1,
    },
    {
      name: "Steve Hatton",
      role: "Corporate",
      position: "Vice President",
      image: "images/team-steve.webp",
      importance: 2,
    },
    {
      name: "Jeff Hatton",
      role: "Corporate",
      position: "Owner",
      image: "images/team-jeff.webp",
      importance: 3,
    },
    {
      name: "Noelia Deaton",
      role: "Corporate",
      position: "Corporate Controller",
      image: "images/team-noelia.webp",
      importance: 4,
    },
    {
      name: "David Banks",
      role: "Construction",
      position: "General Contractor",
      image: "images/team-david.webp",
      importance: 7,
    },
    {
      name: "Tori Ganahl",
      role: "Corporate",
      position: "Accounting",
      image: "images/team-tori.webp",
      importance: 6,
    },
    {
      name: "Sandra Armstrong",
      role: "Corporate",
      position: "Accounting",
      image: "images/team-sandra.webp",
      importance: 5,
    },
    {
      name: "Tyler Hatton",
      role: "Operations",
      position: "Marketing Director",
      image: "images/team-tyler.webp",
      importance: 11,
    },
    {
      name: "Alex Hatton",
      role: "Operations",
      position: "Brand Director",
      image: "images/team-alex.webp",
      importance: 12,
    },
    {
      name: "Kim Crawford",
      role: "Operations",
      position: "HR Coordinator",
      image: "images/team-kim.webp",
      importance: 10,
    },
    {
      name: "Grant Armstrong",
      role: "Construction",
      position: "Master Technician",
      image: "images/team-grant.webp",
      importance: 8,
    },
    {
      name: "Robert Teal",
      role: "Operations",
      position: "Restaurant Manager",
      image: "images/team-robert.webp",
      importance: 9,
    },
  ];

  const grid = document.querySelector(".team-grid");
  const filters = document.getElementById("teamFilters");

  function createTeamCards(filtered) {
    if (!grid) return;
    grid.innerHTML = "";

    // sort by importance (1 is highest); tie-breaker by name
    const sorted = [...filtered].sort(
      (a, b) => a.importance - b.importance || a.name.localeCompare(b.name)
    );

    sorted.forEach((member) => {
      const card = document.createElement("article");
      card.className = "team-card";

      const name = document.createElement("h3");
      name.textContent = member.name;

      const img = document.createElement("img");
      img.className = "team-photo";
      img.src = member.image;
      img.alt = `${member.name}, ${member.position} (${member.role})`;
      img.loading = "lazy";

      const role = document.createElement("p");
      role.className = "team-role";
      role.textContent = member.role;

      const position = document.createElement("p");
      position.className = "team-position";
      position.textContent = member.position;

      card.appendChild(name);
      card.appendChild(img);
      card.appendChild(role);
      card.appendChild(position);

      grid.appendChild(card);
    });
  }

  // initial render (whole team, no filters)
  createTeamCards(team);

  // card filter
  if (filters) {
    filters.addEventListener("click", (e) => {
      const role = e.target?.dataset?.role;
      if (!role) return;

      // visual card state
      Array.from(filters.querySelectorAll(".card")).forEach((c) =>
        c.classList.remove("card-active")
      );
      if (e.target.classList.contains("card"))
        e.target.classList.add("card-active");

      // filter array
      const filtered =
        role === "All" ? team : team.filter((m) => m.role === role);
      createTeamCards(filtered);
    });
  }
}

// ---------- CONTACT ----------
function initContact() {
  const form = document.getElementById("contactForm");
  const counter = document.getElementById("submissionCount");

  if (!form) return;

  // get current count from localStorage, default 0
  let count = parseInt(localStorage.getItem("submissionCount") || "0");
  if (counter) counter.textContent = count;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // increment and store
    count++;
    localStorage.setItem("submissionCount", count);

    // update visible counter
    if (counter) counter.textContent = count;
  });
}
