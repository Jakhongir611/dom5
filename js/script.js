let doc = document

let next = doc.querySelector('.swiper-button-next')
let prev = doc.querySelector('.swiper-button-prev')

new Swiper('.swiper', {
    // Optional parameters
    // direction: "vertical",
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 90,
        shadowScale: 1,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
    },
});

let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
});

var swiper3 = new Swiper(".mySwiper3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: {
        enabled: true,
    },
});