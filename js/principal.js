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
        // paciente.style.color = "red";
        // paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) {
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");  //adicionando style em algum elemento
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

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){
    event.preventDefault(); //função que previni o comportamento padrão que é o de recarregar a pag.
    //ao inves disso imprime uma mensagem na tela
    // console.log("Oi eu sou o botao");
    var form = document.querySelector("#form-adiciona");

    // pegando o conteudo dos inputs;
    var nomeForm = form.nome.value;
    var pesoForm = form.peso.value;
    var alturaForm = form.altura.value;
    var gorduraForm = form.gordura.value

    // console.log(nomeForm);
    // console.log(pesoForm);
    // console.log(alturaForm);
    // console.log(gorduraForm);

    var pacienteTr = document.createElement("tr"); //criando uma tr dentro do html

    var nomeTd = document.createElement("td"); // crianndo as TDs
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //passando os valores do input para cada td
    nomeTd.textContent = nomeForm;
    pesoTd.textContent = pesoForm;
    alturaTd.textContent = alturaForm;
    gorduraTd.textContent = gorduraForm;

    // função para colocar cada uma dessas TD's como filho da TR paciente;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


});


// função anonima
titulo.addEventListener("click", function(){
    console.log("Olha só posso chamar uma função anonima!")
});

// titulo.addEventListener("click", mostraMensagem);

// function mostraMensagem() {
//     console.log("olá, eu fui clicado");
// }




