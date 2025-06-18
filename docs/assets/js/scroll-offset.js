document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-subitem');
  const title = document.querySelector('.title');

  function getOffset() {
    return title ? title.offsetHeight : 0;
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = link.getAttribute('href');
      if (href.includes('#')) {
        const id = href.split('#')[1];
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          const offset = getOffset();
          const rect = target.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          // Scroll so the section appears just below the sticky title
          window.scrollTo({
            top: rect.top + scrollTop - offset,
            behavior: 'smooth'
          });
          // Optionally update the URL hash
          history.replaceState(null, '', '#' + id);
          window.dispatchEvent(new Event('scroll'));
        }
      }
    });
  });
});