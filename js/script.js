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