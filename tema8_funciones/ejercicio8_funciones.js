//Una función sin parámetros que devuelva siempre "true"
function retonarTrue() {
    return true
}
let retornar = retonarTrue();
console.log(retornar)


//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado


const promesa = new Promise((resolve, reject) => {
    if (true){
        resolve()
    }else {
        reject()
    }
})

setTimeout(() => {
    promesa
    .then(()=> console.log("Hola soy una promesa"))
    .catch(() => console.log("ERROR"))
}, 5000)

//- Una función generadora de índices pares automáticos

function* generadora(){
    let indice = 0;
    while(true){
        indice+=2
        if(indice === 10){
            return indice
        };
        yield indice 
    }
    yield indice // yielg se detiene en cada uno de los indices y los muestra
}

let gen = generadora()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
