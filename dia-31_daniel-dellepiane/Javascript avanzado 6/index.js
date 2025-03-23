
// -------------------------------------------- Ejercicio 1 y 6  10 eventos 



// ------------------------------------------- 1- What time is it?

document.getElementById('myButton').addEventListener('click', function () {
    document.getElementById('demo').innerHTML = Date();
});



// ------------------------------------------- 2- Change background color

const btn = document.getElementById("handlerbackgroundChanger");
const section = document.getElementById("description__background");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    section.style.backgroundColor = rndCol;
});



// -------------------------------------------------------- 3,4 -  Focus and blur

const password = document.querySelector('input[type="password"]');
const text = document.querySelector('input[type="text"]');

password.addEventListener("focus", (event) => {
    event.target.style.background = "pink";
});

password.addEventListener("blur", (event) => {
    event.target.style.background = "blue";
});

text.addEventListener("focus", (event) => {
    event.target.style.background = "pink";
});

text.addEventListener("blur", (event) => {
    event.target.style.background = "blue";
});



// -------------------------------------------------------- 5 - Resize
const card = document.querySelector(".card");

card.addEventListener("dblclick", (e) => {
    card.classList.toggle("large");
});


// -------------------------------------------------------- 6,7 - Mouse over - enter



const test2 = document.getElementById("test-over");
// This handler will be executed every time the cursor
// is moved over a different list item
test2.addEventListener(
    "mouseover",
    (event) => {
        // highlight the mouseover target
        event.target.style.color = "orange";

        // reset the color after a short delay
        setTimeout(() => {
            event.target.style.color = "";
        }, 5000);
    },
    false,
);

const test1 = document.getElementById("test-enter");

// This handler will be executed only once when the cursor
// moves over the unordered list
test1.addEventListener(
    "mouseenter",
    (event1) => {
        // highlight the mouseenter target
        event1.target.style.color = "green";

        // reset the color after a short delay
        setTimeout(() => {
            event1.target.style.color = "";
        }, 5000);
    },
    false,
);


// -------------------------------------------------------- 8 - Scroll
let x = 0;

function myFunction() {
    document.getElementById("numero").innerHTML = x += 1;
}

// Associa l'evento 'scroll' al div con id 'scrollable'
document.getElementById("scroll").addEventListener("scroll", myFunction);


// -------------------------------------------------------- 9 - Open details

function myFunction() {
    alert("The ontoggle event occurred");
}

// Seleziona l'elemento <details> e aggiunge l'evento 'toggle'
document.getElementById("details").addEventListener("toggle", myFunction);

// -------------------------------------------------------- 10 - Wheel over

document.getElementById("wheel").onwheel = function () { wheel() };

function wheel() {
    document.getElementById("wheel").style.fontSize = "35px";
}


// -------------------------------------------- Ejercicio 2


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getColor() {
    return `rgb(${getRndInteger(0, 255)}, ${getRndInteger(0, 255)}, ${getRndInteger(0, 255)})`;
}


const buttons = document.querySelectorAll('.buttonchanger');

function handlerBgChanger(e) {
    e.target.style.backgroundColor = getColor;
    //console.log(e) serve per vedere cosa succede quando clicco il bottone, registra l'evento del clcik
    console.log(e)
}

buttons.forEach((button, index) => {
    button.addEventListener('click', handlerBgChanger);
});


// -------------------------------------------- Ejercicio 3 - Crea un html con 5 div de 100px por 100px y un botón. 
// Cada vez que pulses el botón. Los divs tienen que cambiar de color de manera aleatoria.

const button3 = document.getElementById('button3');

const box3 = document.querySelectorAll('.box3');

function handlerBoxBgChanger3() {
    box3.forEach(box => box.style.backgroundColor = getColor());
}

button3.addEventListener('click', handlerBoxBgChanger3);


// -------------------------------------------- Ejercicio 4

// function handlerMoveMouse(e) {
//     console.log(e.clientX, e.clientY);
// }

// window.addEventListener('mousemove', handlerMoveMouse)

// -------------------------------------------- Ejercicio 4B


function handlerMoveMouse(e) {
    document.getElementById('clientX').innerHTML = e.clientX;
    document.getElementById('clientY').innerHTML = e.clientY;
}

window.addEventListener('mousemove', handlerMoveMouse)


// -------------------------------------------- Ejercicio 5

function handlerBgChanger2(e) {
    e.target.style.backgroundColor = getColor();
    //console.log(e) serve per vedere cosa succede quando clicco il bottone, registra l'evento del clcik
   
}


const box5 = document.querySelectorAll('.box5');

box5.forEach(box => {
    box.addEventListener("mouseenter",handlerBgChanger2);
    box.addEventListener("mouseleave",handlerBgChanger2);
});