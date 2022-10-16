
let nombre = "Jonatan"
let apellido = "Primera"
let estudiante = nombre + " " + apellido
let estudianteMyus = estudiante.toUpperCase()
let estudianteMinus = estudiante.toLocaleLowerCase()
let numeroDeLetras = estudiante.length
let primeraLetra = nombre.charAt(0)
let ultimaLetra = apellido[6]
let texto = estudiante.split(" ").join("")
let contienePalabra = estudiante.includes("Jonatan")


console.log(estudiante)
console.log(estudianteMyus)
console.log(estudianteMinus)
console.log(numeroDeLetras)
console.log(primeraLetra)
console.log(ultimaLetra)
console.log(texto)


/*Crea un nuevo proyecto de Node

- Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)

- Duplica el archivo del ejercicio de la sesión 04-Textos

- Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)

- Crea el fichero .eslintrc.json

- Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"

- Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles

- Crea un script en el package.json para corregir automáticamente todos los errores

- Ejecuta el script a través del terminal*/