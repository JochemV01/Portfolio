// File made with help of GitHub Copilot
// This script highlights the active section in the navigation bar based on scroll position
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-subitem");
  const title = document.querySelector('.title');

  // Collect only section elements that are actually linked in the menu
  const sectionIds = Array.from(navLinks)
    .map(link => link.getAttribute("href").split("#")[1])
    .filter(id => !!id);
  const sections = sectionIds
    .map(id => document.getElementById(id))
    .filter(el => el); // Only existing elements

  function getOffset() {
    return title ? title.offsetHeight : 0;
  }

  function onScroll() {
    const offset = getOffset();
    let currentSection = sections[0];

    // Find the last section above the offset
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      if (rect.top - offset <= 50) {
        currentSection = sections[i];
      } else {
        break;
      }
    }

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").split("#")[1] === currentSection.id) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);
  onScroll();
});