let navMobile = document.querySelector("#nav-mobile");
let NavMenu = document.querySelector(".nav-menu");
let heightHeader = document.querySelector(".header");
heightHeader = heightHeader.clientHeight;
let $$ = document.querySelectorAll.bind(document);
const NavItem = $$('.nav-item');
console.log(NavItem);

navMobile.addEventListener("click", function () {
    NavMenu.classList.toggle("show-mobile");

})
NavItem.forEach(function (item, index) {
    item.onclick = function () {
        NavMenu.classList.toggle("show-mobile");
    }
})