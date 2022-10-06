let lista_de_compras = ["leche", "azucar", "arroz", "arina", "cafe"]; 



lista_de_compras.push("Aceite de girasol");



lista_de_compras.pop()

console.log(lista_de_compras);


const peliculasFavoritas = [
    {titulo:"Harry Potter", director: "Chris Columbus ", fecha: 2001},
    {titulo:"Rapidos y furiosos", director: "Justin Lin", fecha: 2001},
    {titulo:"Avengers", director: "Joss Whedon", fecha: 2012},
]

const peliculas_despues2010  = peliculasFavoritas.filter(pelicula => pelicula.fecha > 2010);
console.log(peliculas_despues2010);

const lista_directores = peliculasFavoritas.map(obj => obj.director);
console.log(lista_directores);

const lista_titulos = peliculasFavoritas.map(obj => obj.titulo);
console.log(lista_titulos);

let directores_titulos = lista_directores.concat(lista_titulos);
console.log(directores_titulos)

let new_directores_titulos = [...lista_directores, ...lista_titulos];
console.log(new_directores_titulos)
