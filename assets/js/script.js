let navMobile = document.querySelector("#nav-mobile");
let NavMenu = document.querySelector(".nav-menu");
let heightHeader = document.querySelector(".header");
heightHeader = heightHeader.clientHeight
console.log(heightHeader);
navMobile.addEventListener("click", function () {
    // NavMenu.style.top = `80 px`;
    NavMenu.classList.toggle("show-mobile");
})