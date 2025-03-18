
// ----------------------- Ejercicio 1 primo array

console.log("----Ejercicio 1-----")
let animali = ["elefante", "cervo", "leone", "ippopotamo", "ape", "giaguaro", "cane", "capriolo", "corvo"];

console.log(animali)

// ----------------------- Ejercicio 2  visualizza pos 3 e 6  


console.log(animali[3]);
console.log(animali[6]);

// ----------------------- Ejercicio 3   lunghezza array 

console.log(animali.length);

//  ----------------------- Ejercicio 4  unshift ovvero aggiungere elemento 


console.log(animali.unshift("gatto"));
console.log(animali);

//  ----------------------- Ejercicio 5 aggiungere alla fine con push


console.log(animali.push("balena"));
console.log(animali);

//  ----------------------- Ejercicio 6 eliminare due elementi  

console.log(animali.splice(4, 2));
console.log(animali);

//  ----------------------- Ejercicio 7 visualizza posizione elemento


console.log(animali.indexOf("cane"));


//  ----------------------- Ejercicio 8   reverse

console.log(animali.reverse())

//  ----------------------- Ejercicio 9 convertire el array in un string separato con virgole

console.log(animali.join(','))

//  ----------------------- Ejercicio 10 separa string e riconverte a array

console.log(animali.join(' '))
const str = 'balena corvo capriolo cane giaguaro leone cervo elefante gatto';
const words = str.split(' ')
console.log(words);


//  ----------------------- Ejercicio 11 Recorre el array y imprime por consola cada valor y cada posición.

let animali2 = ["elefante", "cervo", "leone", "ippopotamo", "ape", "giaguaro", "cane", "capriolo", "corvo"]

animali2.forEach((animale, i) => {
    console.log(animale)
    console.log(i)
})


//  ----------------------- Ejercicio 12 Recorre el array añadiendo algo a cada valor y imprime por consola cada valor y cada posición.

let animali3 = ["elefante", "cervo", "leone", "ippopotamo", "ape", "giaguaro", "cane", "capriolo", "corvo"]

console.log(animali3.map(animaletto => animaletto + "ciao"))

//  ----------------------- Ejercicio 13 Buscar elemento
let animali4 = ["elefante", "cervo", "leoneciao", "ippopotamo", "ape", "giaguaro", "cane", "capriolo", "corvo"]

console.log(animali4.find(animalino=>animalino.includes("leone")))


//  ----------------------- Ejercicio 14 Filtra algunos de los datos. Y muestra el resultado por consola.

let cani = [
    { razza : "setter" , animale : "cane" },
    { razza : "dogo" , animale : "cane" },
    { razza : "schnauzer" , animale : "gatto" },  
    { razza : "labrador" , animale : "gatto" },
]

let cane = cani.filter(cane=>cane.animale==="cane")

console.log(cane)

//  ----------------------- Ejercicio 15 Deconstruye el siguiente array y imprime cada variable en un console log diferente.

const alumno =["timmy" , "franco", "diseno"] 

const[nome, cognome, corso] = alumno

console.log(nome)

