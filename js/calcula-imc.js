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

    var pesoEhValido = validaPeso(peso);
    var alturaEhValido = validaAltura(altura);

    if (!pesoEhValido) { //só entra se o valor é inválido 
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        // paciente.style.color = "red";
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if (!alturaEhValido) {
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");  //adicionando style em algum elemento
    }

    if (pesoEhValido == true && alturaEhValido == true) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }

}
console.log(paciente); // tr
console.log(tdpeso); //td que contem peso
console.log(peso);
console.log(altura);
console.log("Tamanho do meu array de paciente: " + pacientes.length);



// função anonima
titulo.addEventListener("click", function () {
    console.log("Olha só posso chamar uma função anonima!")
});

// titulo.addEventListener("click", mostraMensagem);
// function mostraMensagem() {
//     console.log("olá, eu fui clicado");
// }

function validaPeso(peso) {
    if (peso >= 0 && peso < 1000) return true;
    else return false;
}

function validaAltura(altura) {
    if (altura >= 0 && altura <= 3.00) return true;
    else return false;
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}




