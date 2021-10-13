/* =========================== MENU SHOW Y HIDDEN ============================== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ================ MENU SHOW ================= */
// Validate if constant exist
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/* ================ MENU HIDE ================= */
// Validate if constant exist
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ================ REMOVE MENU MOBILE ================= */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/* ================ SKILLS BAR ================= */
const skillsNumber = document.querySelectorAll(".skills__number");
const skillsPercentage = document.querySelectorAll(".skills__percentage");
for (let i = 0; i < skillsNumber.length; i++) {
  const element = skillsNumber[i];
  skillsPercentage[i].style.width = element.innerHTML;
}

/* ================ SKILLS ACCORDION ================= */
const skillsContent = document.querySelectorAll(".skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => el.addEventListener("click", toggleSkills));
