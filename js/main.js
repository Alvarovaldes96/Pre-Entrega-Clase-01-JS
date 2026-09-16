// Msj bienvenida
alert("BIENVENIDO/A!");
console.log("BIENVENIDO/A!");

// 1°er dato
let edad = parseInt(prompt("Ingresa tu edad para calcular el peso ideal para iniciar tu entrenamiento:"));
const pesoIdeal = 10;
let resultado = edad - pesoIdeal;

alert("Peso ideal: "+ resultado +"kg");
console.log("Ingresa tu edad para calcular el peso ideal para iniciar tu entrenamiento:", edad, resultado);

// 2°do dato
let altura = parseFloat(prompt("Ingresa tu altura en metros para calcular la distancia de salto:"));
const distancia = 1.23;
let resultado2 = altura * distancia;

alert("Distancia de salto: "+ resultado2 +"m");
console.log("Ingresa tu altura para calcular la distancia de salto:", altura, resultado2);

// 3°er dato
alert("¿Crees estar descansado/a?");
let horasDeDescanso = parseFloat(prompt("Ingresa la cantidad de horas que duermes para identificar si estás bien descansado/a."));
const bienDescansado = [6, 7, 8, 9, 10];
const malDescansado = [1, 2, 3, 4, 5];
const estaBienDescansado = bienDescansado.includes(horasDeDescanso);
console.log("Ingresa la cantidad de horas que duermes para identificar si estás bien descansado/a:", horasDeDescanso, estaBienDescansado);

