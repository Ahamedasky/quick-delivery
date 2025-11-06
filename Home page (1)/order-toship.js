// orders-to-ship.js

document.addEventListener("DOMContentLoaded", () => {
  // Highlight active tab in Bottom Navigation
  const currentPage = 'orders'; // set this based on the current page
  const bottomNavLinks = document.querySelectorAll(".bottom-nav a");
  
  bottomNavLinks.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Highlight active tab in Secondary Navigation
  const currentSection = 'to-ship'; // set this based on the current section
  const secondaryNavLinks = document.querySelectorAll(".secondary-nav a");

  secondaryNavLinks.forEach(link => {
    if (link.dataset.section === currentSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

