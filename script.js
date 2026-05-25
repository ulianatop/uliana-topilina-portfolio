const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const typewriter = document.querySelector("#typewriter");
const phrases = [
  "full-stack web development.",
  "JavaScript, Java, and SQL."
];

let phraseIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeLoop() {
  if (!typewriter) return;
  const phrase = phrases[phraseIndex];

  if (!deleting) {
    typewriter.textContent = phrase.slice(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === phrase.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    typewriter.textContent = phrase.slice(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 80);
}

typeLoop();
