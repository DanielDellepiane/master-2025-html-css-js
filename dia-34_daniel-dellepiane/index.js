
// -------------------------------------------- Ejercicio 1 - 2 - menu interactivo--------------------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//     let menuItems = document.querySelectorAll(".nav li a");

//     menuItems.forEach(item => {
//         item.addEventListener("click", function (event) {
//             let submenu = this.parentElement.querySelector("ul");
            
//             if (submenu) {
//                 event.preventDefault();
                
//                 let isOpen = this.parentElement.classList.contains("show");
                
//                 document.querySelectorAll(".nav li.show").forEach(openItem => {
//                     openItem.classList.remove("show");
//                 });

//                 if (!isOpen) {
//                     this.parentElement.classList.add("show");
//                 }
//             }
//         });
//     });

//     document.addEventListener("click", function (event) {
//         if (!event.target.closest(".nav")) {
//             document.querySelectorAll(".nav li.show").forEach(item => {
//                 item.classList.remove("show");
//             });
//         }
//     });
// });

// -------------------------------------------- Ejercicio 3 - 4 Lightbox


const contenedor = document.querySelector('.grid');
const imgList = contenedor.querySelectorAll('.img');
const lightbox = contenedor.parentElement.querySelector('.lightbox');
const grande = lightbox.querySelector('.grande');
const closeBtn = lightbox.querySelector('.close');

const openLightbox = (index) => {
    lightbox.classList.add('isActive');
    grande.src = imgList[index].src;
};

const closeLightbox = () => lightbox.classList.remove('isActive');

imgList.forEach((eachImg, index) => {
    eachImg.addEventListener('pointerdown', () => openLightbox(index));
});

closeBtn.addEventListener('pointerdown', closeLightbox);