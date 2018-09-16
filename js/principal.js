// console.log("aeeee")
// console.log(document.querySelector("h1")); 
var titulo = document.querySelector(".titulo");
// console.log(titulo);
// console.log(titulo.textContent);
titulo.textContent = "Aparecidade Sumiu";


var paciente = document.querySelector("#primeiro-paciente");
var pacientes = document.querySelectorAll(".paciente");


for (i = 0; i < pacientes.length; i++) {

    paciente = pacientes[i];

    var tdpeso = paciente.querySelector(".info-peso");
    var tdaltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdpeso.textContent;
    var altura = tdaltura.textContent;

    var pesoEhValido = true;
    var alturaEhValido = true;

    if (peso <= 0 || peso >= 1000) {
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
    }
    if (altura <= 0 || altura >= 3.00) {
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválida!";
    }

    if (pesoEhValido == true && alturaEhValido == true) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

}

console.log(paciente); // tr
console.log(tdpeso); //td que contem peso
console.log(peso);
console.log(altura);




console.log("Tamanho do meu array de paciente: " + pacientes.length);
