// console.log("aeeee")
// console.log(document.querySelector("h1")); 
var titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log(titulo.textContent);
titulo.textContent = "Aparecidade Sumiu";


var paciente = document.querySelector("#primeiro-paciente");
var tdpeso = paciente.querySelector(".info-peso");
var tdaltura = paciente.querySelector(".info-altura");


var peso = tdpeso.textContent;
var altura = tdaltura.textContent;

var imc = peso/(altura*altura);

var tdImc = paciente.querySelector(".info-imc");

tdImc.textContent = imc;

console.log(paciente); // tr
console.log(tdpeso); //td que contem peso
console.log(peso);
console.log(altura);

teste