
const headerMenu    = document.querySelector(".header__menu");
const headerBurger  = document.querySelector(".header__burger");
const body          = document.querySelector("body");


headerBurger.addEventListener("click", function (e) {
    e.preventDefault();
    headerMenu.classList.toggle("header-active");
    headerBurger.classList.toggle("header-active");
    body.classList.toggle("lock");
})
