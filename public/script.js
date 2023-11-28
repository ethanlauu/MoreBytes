const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

const navbar = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY < window.scrollY) {
        console.log("down");
        navbar.classList.add("nav--hidden");
    } else {
        console.log("up");
        navbar.classList.remove("nav--hidden");
    }

    lastScrollY = window.scrollY;
})

const footer = document.querySelector(".footer");
let lastScrollY2 = window.scrollY;

window.addEventListener("scroll", () => {
    if (lastScrollY2 < window.scrollY) {
        console.log("footerdown");
        footer.classList.add("footer--hidden");
    } else {
        console.log("footerup");
        footer.classList.remove("footer--hidden");
    }

    lastScrollY2 = window.scrollY;
})
