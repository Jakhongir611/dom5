let doc = document
// let h = doc.querySelector('h1')

// black = () => {
//     h.style.color = 'black'
// }

// h.addEventListener("mouseleave", black)
// h.addEventListener("mousemove", function () { h.style.color = 'yellow' })

// let btn = doc.querySelector('button')
// btn.addEventListener('keyup', (event)=>{
//     if(event.keyCode === 13){
//         alert('Enter')
//     }else if(event.keyCode === 32){
//         alert('Пробел')
//     }
// })

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

// next.addEventListener('keyup', (event)=>{
//     if(event.keyCode === 39){
//             nextEl: '.swiper-button-next'
//     }
// })
// prev.addEventListener('keyup', (event)=>{
//     if(event.keyCode === 37){
//             prevEl: '.swiper-button-prev'
//     }
// })