
// -------------------------------------------- Ejemplo quitar una clase de un elemento --------------------------------------------

// let exampleContainer = document.getElementById('exampleContainer');
// exampleContainer.classList.remove('box');



// --------- Añadir una clase a un elemento ---------
// let div = document.createElement('div');
// div.classList.add('box');
// div.innerHTML = "1";
// exampleContainer.appendChild(div);

// per aggiungere la classe non dentor ma prima dell'elemento
// document.body.insertBefore(div, h1)



// -------------------------------------------- Ejemplo x aggiungere elementi con fragmento


// const exampleContainer = document.getElementById('exampleContainer');
// const h1 = dociument.getElementById('h1');

// let fragmento = document.createDocumentFragment()

// for(let i = 0; i < 5; i++){
//     let div = document.createElement('div');
//     div.classList.add('box');
//     div.innerHTML = i + 1;
//     fragmento.appendChild(div);
// }

// exampleContainer.appendChild(fragmento);


// -------------------------------------------- Ejercicio 1 Crea una página con un div y un botón. Cuando pulsemos el botón, se tiene que añadir una clase de css al div, esta clase tiene que añadir una animación al div..

const box1 = document.querySelector('.box');

const bt1 = document.querySelector('#bt1');

function handlerToggleAnimate1() {
    box1.classList.add('animate1');
}

bt1.addEventListener('click', handlerToggleAnimate1);

// -------------------------------------------- Ejercicio 2

const bt2 = document.querySelector('#bt2');

function handlerToggleAnimate2() {
    box1.classList.remove('animate1');
}

bt2.addEventListener('click', handlerToggleAnimate2);

// -------------------------------------------- Ejercicio 3

const bt3 = document.querySelector('#bt3');

function handlerToggleAnimate3() {
    box1.classList.toggle('animate1');
}

bt3.addEventListener('click', handlerToggleAnimate3);


// -------------------------------------------- Ejercicio 5 Y 6

const container5 = document.querySelector('.container5');
const bt5 = document.querySelector('#bt5');
let i5 = 0;

function handlerRemoveBox5(e) {
    e.target.remove();
}

function handlerAddBox5() {
    let count = document.querySelectorAll('.container5 .box').length + 1;
    let div = document.createElement('div');
    i5++;
    div.classList.add('box');
    div.innerHTML = count;
    div.addEventListener('click', handlerRemoveBox5);
    container5.appendChild(div);
}

bt5.addEventListener('click', handlerAddBox5);


