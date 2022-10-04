let nombre = "Jonatan";
let apellido = "Primera";
let estudiante = nombre + " " + apellido;
let estudianteMyus = estudiante.toUpperCase();
let estudianteMinus = estudiante.toLocaleLowerCase()
let numeroDeLetras = estudiante.length
let primeraLetra = nombre.charAt(0);
let ultimaLetra = apellido[6];
let texto = estudiante.split(' ').join('');;
let contienePalabra = estudiante.includes("Jonatan")


console.log(estudiante);
console.log(estudianteMyus);
console.log(estudianteMinus);
console.log(numeroDeLetras);
console.log(primeraLetra);
console.log(ultimaLetra)
console.log(texto);
console.log(contienePalabra);