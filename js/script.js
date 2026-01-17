// toggle

const navbarNav = document.querySelector(".navbar-nav");

// onclick

document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// outer sidebar click

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
