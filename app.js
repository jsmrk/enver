// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// SmoothScroll
const scroll = new SmoothScroll('.main-nav a[href*="#"]', { speed: 500 });
const allNavLinks = document.querySelectorAll('.main-nav a[href*="#"]');
allNavLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
