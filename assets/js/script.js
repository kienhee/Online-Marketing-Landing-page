
$(document).ready(function () {
    $('.blog-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-circle-chevron-left icon-slider' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-circle-chevron-right icon-slider' aria-hidden='true'></i></button>",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                }
            }]
    });
});

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