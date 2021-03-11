
const headerMenu    = document.querySelector(".header__menu");
const headerBurger  = document.querySelector(".header__burger");
const headerElement = document.querySelector(".header__link");
const body          = document.querySelector("body");


headerBurger.addEventListener("click", function (evt) {
    evt.preventDefault();
    headerMenu.classList.toggle("header-active");
    headerBurger.classList.toggle("header-active");
    body.classList.toggle("lock");
})
