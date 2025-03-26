// Ejercicio 1 - 2
function menu(id) {
    document.querySelector("li.active").classList.remove("active");
    document.querySelector("main div.active").classList.remove("active");
    document.querySelector("#menu-" + id).classList.add("active");
    document.querySelector("#div-" + id).classList.add("active");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ejercicio 4 - Generazione numero casuale e validazione
function genNumber() {
    let n = getRandomInt(1, 9);
    let number = document.getElementById("number");
    let span = document.getElementById("span");

    if (number.value) {
        if (parseInt(number.value) === n) {
            span.style.color = "green";
            span.innerHTML = `Il numero ${n} è corretto.`;
        } else {
            span.style.color = "red";
            span.innerHTML = `Il numero è sbagliato. Il numero corretto era ${n}`;
        }
    } else {
        span.style.color = "red";
        span.innerHTML = "Non hai inserito nessun numero.";
    }
}

// Funzione di validazione input numerico
function validate(elem) {
    elem.value = elem.value.replace(/[^0-9]/g, ""); // Rimuove tutto tranne i numeri
    let value = parseInt(elem.value);
    if (isNaN(value) || value < 1 || value > 9) {
        elem.value = "";
    }
}

// Attendere il caricamento del DOM per eseguire gli script
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente caricato!");

    // Assicurarsi che il pulsante "check" esista prima di aggiungere l'event listener
    let checkButton = document.getElementById("check");
    if (checkButton) {
        checkButton.addEventListener("click", genNumber);
    } else {
        console.error("Bottone 'check' non trovato!");
    }

    // Inizializzazione Particles.js solo se lo script è caricato
    if (window.particlesJS) {
        console.log("particles-js trovato? Sì");

        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 100 },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5 },
                "size": { "value": 3 },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff" },
                "move": { "enable": true, "speed": 2 }
            }
        });

        console.log("particlesJS inizializzato!");
    } else {
        console.error("particlesJS non trovato! Assicurati che lo script sia incluso correttamente.");
    }
});

