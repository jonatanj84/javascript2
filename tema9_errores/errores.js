let funcionError = verdadero => {
    if (typeof verdadero === "boolean"){
        return verdadero;
    }
    throw new Error("no esta definido no es boleano")
}
//console.log(funcionError (true))
let verdadero_falso = true

try {
    console.log("Esta correcto")
    let error = funcionError(verdadero_falso)
    console.log(error)
} catch (e) {
    console.log("ERROR")
} finally {
    console.log("gestion de errores")
}
