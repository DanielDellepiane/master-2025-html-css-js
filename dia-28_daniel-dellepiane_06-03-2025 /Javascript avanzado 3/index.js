
// ----------------------- Ejercicio 1  accede a cada una de sus propiedades mostrandolas por consola.

console.log("-------- Ejercicio 1 --------")

const alumno = {
    nombre: 'daniel',
    apellido: 'dellepiane',
    curso: 'web',
}

console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.curso);


// ----------------------- Ejercicio 2  Deconstruye el objeto “alumno” y accede a cada una de sus variables cargadas.

console.log("-------- Ejercicio 2 --------")


const { nombre, apellido, curso } = alumno;

console.log(alumno.nombre);
console.log(alumno.apellido);
console.log(alumno.curso);





// ----------------------- Ejercicio 3  Añade al objeto “alumno” una metodo. Que imprimar el nombre y apellidos del alumno por consola.

console.log("-------- Ejercicio 3 --------")

alumno.print = function (){
    console.log(this.nombre + " " + this.apellido);
}
alumno.print()