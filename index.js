const mobile_nav = document.querySelector(".mobile-navbar");
const nav_header = document.querySelector(".right");

const toggleNavbar = () => {

    nav_header.classList.toggle("active");

};

mobile_nav.addEventListener("click",() => toggleNavbar());

