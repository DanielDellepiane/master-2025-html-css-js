
// -------------------------------------------- Ejercicio 1  window opne, close, move, resize, location --------------------------------------------


let newWindows;

console.log(window.location)
const x = document.querySelectorAll('button');

function handlerOpen() {
    let params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=300,left=100,top=100';
    newWindows = open("", "test", params);
    newWindows.document.write("Hello, world!");
}
function handlerClose() {
    newWindows.close()
}
function handlerMove() {
    newWindows.moveTo(100, 100)
}
function handlerResize() {
    newWindows.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2)
}
function handlerLocation() {
    newWindows.location = "https://www.google.com"
}

// -------------------------------------------- Ejercicio 2 Randorizer - Crea numeri random

const boxes = document.querySelectorAll('.box');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handlerRandorizer() {
    boxes.forEach((box, index) => {
        box.innerHTML = getRndInteger(1, 100);
        let red = getRndInteger(0, 255);
        let green = getRndInteger(0, 255);
        let blue = getRndInteger(0, 255);
        box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    });
}


// -------------------------------------------- Ejercicio 3 calculator

const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');
const operator = document.getElementById('operator');
const result = document.getElementById('result');

function handlerCalculator() {
    const value1 = parseFloat(n1.value);
    const value2 = parseFloat(n2.value);
    let calcResult;

    switch (operator.value) {
        case '+':
            calcResult = value1 + value2;
            break;
        case '-':
            calcResult = value1 - value2;
            break;
        case '*':
            calcResult = value1 * value2;
            break;
        case '/':
            calcResult = value1 / value2;
            break;

        default:
            calcResult = "Error";
            break;
    }

    result.innerHTML = calcResult;
}