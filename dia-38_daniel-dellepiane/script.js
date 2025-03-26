
// Ejercicio 3
// const mountainBlue = document.querySelector("#mountain-blue");
// const mountainRed = document.querySelector("#mountain-red");
// const treesLeft = document.querySelector("#trees-left");
// const treesBottom = document.querySelector("#trees-bottom");
// const man = document.querySelector("#man");
// const plants = document.querySelector("#plants");
// const titulo = document.querySelector("#titulo");

// window.addEventListener("scroll", () => {
//     let scroll = window.scrollY;

//     mountainBlue.style.left = scroll * 1 + "px";
//     mountainRed.style.left = scroll * 0.5 + "px";

//     treesLeft.style.bottom = scroll * -2 + "px";
//     treesLeft.style.right = scroll * 2 + "px";

//     treesBottom.style.right = scroll * 2 + "px";
//     man.style.right = scroll + "px";
//     plants.style.right = scroll * 2 + "px";
//     titulo.style.right = scroll * 4 + "px";
// })


// Ejercicio 1-2
var squares = document.getElementById("square1");
var eyeball = document.getElementById("eyeball");

document.addEventListener("mousemove", event => {
    let posX = event.clientX - window.innerWidth / 2;
    let posY = event.clientY - window.innerHeight / 2;

    squares.style.transform = "translate(" + posX * 0.01 + "%, " + posY * 0.01 + "%)";
    eyeball.style.transform = "translate(" + posX * 0.08 + "%, " + posY * 0.08 + "%)";
});
