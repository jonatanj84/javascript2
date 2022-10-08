let datosPersonales = {
    nombre: "Jonatan",
    apellido: "Primera",
    edad: 38,
    altura: 1.80,
    eresDesarrollador: true,
}

let edad = datosPersonales.edad;
console.log(edad)

let datosAmigos = [
    {nombre: "Fredy", apellido: "Chirinos", edad: 36, altura: 1.60, eresDesarrollador: false},
    {nombre: "Joandry", apellido: "Primera", edad: 35, altura: 1.70, eresDesarrollador: false}
]

const newArray = datosAmigos.sort((a, b) => a.edad -b.edad);
console.log(newArray)



