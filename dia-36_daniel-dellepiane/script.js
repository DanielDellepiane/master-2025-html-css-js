// // Ejercicio 1
// const swiper = new Swiper('.swiper', {
//     loop: true, // Loop infinito
//     autoplay: {
//       delay: 3000, // Cambio slide automatico ogni 3 secondi
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });

// // Ejercicio 2
// let index = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// document.getElementById('prev').addEventListener('click', () => moveSlide(-1));
// document.getElementById('next').addEventListener('click', () => moveSlide(1));

// function moveSlide(direction) {
//     index += direction;
//     if (index < 0) index = totalSlides - 1;
//     if (index >= totalSlides) index = 0;
//     document.querySelector('.slider').style.transform = `translateX(${-index * 100}%)`;
// }


// // Ejercicio 3

let index = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slider = document.querySelector('.slider');
const angleStep = 360 / totalSlides;
const radius = 150; // Ridotto il raggio per evitare spazi tra le immagini

// Posizionare le slide in un cerchio 3D senza spazi
slides.forEach((slide, i) => {
    const angle = i * angleStep;
    slide.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`;
    slide.style.transition = "transform 1s ease-in-out";
});

document.getElementById('prev').addEventListener('click', () => moveSlide(-1));
document.getElementById('next').addEventListener('click', () => moveSlide(1));

function moveSlide(direction) {
    index += direction;
    const angle = index * -angleStep;
    slider.style.transform = `rotateY(${angle}deg)`;
}