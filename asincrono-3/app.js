
// // -------------------------------------------- Lightbox
// const contenedor = document.querySelector('.grid');
// const imgList = contenedor.querySelectorAll('.img');
// const lightbox = contenedor.parentElement.querySelector('.lightbox');
// const grande = lightbox.querySelector('.grande');
// const closeBtn = lightbox.querySelector('.close');

// const openLightbox = (index) => {
//     lightbox.classList.add('isActive');
//     grande.src = imgList[index].src;
// };

// const closeLightbox = () => lightbox.classList.remove('isActive');

// imgList.forEach((eachImg, index) => {
//     eachImg.addEventListener('pointerdown', () => openLightbox(index));
// });

// closeBtn.addEventListener('pointerdown', closeLightbox);




// -------------------------------------------- Tabs

// const contenedor = document.querySelector('.contenedor');
// const li = contenedor.querySelectorAll('.li');
// const bloque = contenedor.querySelectorAll('.bloque');

// li.forEach((cadaLi, index) => {
//     cadaLi.addEventListener('click', () => {
//         contenedor.querySelector('.li.activo').classList.remove('activo');
//         contenedor.querySelector('.bloque.activo').classList.remove('activo');

//         cadaLi.classList.add('activo');
//         bloque[index].classList.add('activo');
//     });
// });

// -------------------------------------------- Acordeon
const contenedor = document.querySelector('.acordeon');
const bloques = contenedor.querySelectorAll('.bloque');

bloques.forEach((bloque) => {
    const titulo = bloque.querySelector('.h2');

    titulo.addEventListener('click', () => {
        bloques.forEach((b) => b.classList.toggle('activo', b === bloque));
    });
});

