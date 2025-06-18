document.addEventListener("DOMContentLoaded", function() {
  const sidebar = document.getElementById('sidebar');
  const toggle = document.querySelector('.sidebar-toggle');
  toggle.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    document.body.classList.toggle('sidebar-open');
  });

  // Optional: close sidebar when clicking outside
  document.addEventListener('click', function(e) {
    if (
      sidebar.classList.contains('open') &&
      !sidebar.contains(e.target) &&
      !toggle.contains(e.target)
    ) {
      sidebar.classList.remove('open');
      document.body.classList.remove('sidebar-open');
    }
  });
});