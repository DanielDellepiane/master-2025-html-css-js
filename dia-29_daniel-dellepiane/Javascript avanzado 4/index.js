
// -------------------------------------------- Ejercicio 1  scrivi i primi 100 numeri pari

// function pares() {
//     for (let i = 2; i < 100; i = i + 2) {
//     console.log(i) }
// }

// pares ()


// -------------------------------------------- Alternativa  ejercicio 1
// function pares() {
//     for (let i = 1; i < 100; i++) {
//         if (i % 2 == 0) {
//             console.log(i);
//         }
//     }
// }

// pares();



// // -------------------------------------------- Ejercicio 2 costruisci quadrato pieno
// function cuadrado() {
//     for (let i = 0; i < 5; i++) {

//         console.log("*****");

//     }
// }

// cuadrado();


// -------------------------------------------- Ejercicio 2 alternativa
// function cuadrado() {
//     for (let i = 0; i < 5; i++) {
//         let str = ""
//         for (let j = 0; j < 5; j++) {
//             str += "*"
//         }
//         console.log(str);

//     }
// }

// cuadrado();



// // -------------------------------------------- Ejercicio 3 costruisci quadrato hueco
// function cuadrado() {
//     for (let i = 0; i < 5; i++) {
//         let str = ""
//         for (let j = 0; j < 5; j++) {
//             if (i == 0 || i == 4 || j == 0 || j == 4) {
//                 str += "*"
//             }
//             else { str += " " }
//         }
//         console.log(str);
//     }
// }

// cuadrado();

// // -------------------------------------------- Ejercicio 4   Crea 2 funciones “saludar” y “procesarEntradaUsuario”. Y pasa la primera a la segunda. Pide el nombre con “prompt” y muestralo con “alert”.

function saludar(nombre){
    alert("Hola " + nombre)
}


// function adios(nombre){
//     alert("Adios " + nombre)
// }


function procesarEntradaUsuario(callback){
    var nombre = prompt("Introduce tu nombre")
    callback(nombre)
}

procesarEntradaUsuario(saludar)
// procesarEntradaUsuario(adios)