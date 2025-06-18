// File made with help of GitHub Copilot
// This script highlights the active section in the navigation bar based on scroll position
document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("h1[id], h2[id], h3[id], section[id]");
  const navLinks = document.querySelectorAll(".nav-subitem");
  const title = document.querySelector('.title');

  function getOffset() {
    return title ? title.offsetHeight : 0;
  }

  function onScroll() {
    const offset = getOffset();
    let currentSection = sections[0];
    let minDistance = Number.POSITIVE_INFINITY;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top - offset < 50 && rect.top - offset > -window.innerHeight / 2) {
        const distance = Math.abs(rect.top - offset);
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = section;
        }
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").split("#")[1] === currentSection.id) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll); // In case the title height changes
  onScroll(); // Run on load
});

