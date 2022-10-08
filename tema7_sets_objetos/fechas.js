//fecha de hoy
let fecha= new Date();
console.log(fecha);

//fecha de nacimiento
let fechaNacimiento = new Date(1984, 06, 26);
console.log(fechaNacimiento);

//Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
let fecha_mas_tarde = (fecha > fechaNacimiento);
console.log(fecha_mas_tarde);

//mes de nacimiento
let mesNacimiento = fechaNacimiento.getMonth()+1;
console.log(mesNacimiento);

//dia de nacimiento
let diaNacimineto = fechaNacimiento.getDate();
console.log(diaNacimineto);

//año de nacimiento
let anyoNacimiento = fechaNacimiento.getFullYear();
console.log(anyoNacimiento); 

