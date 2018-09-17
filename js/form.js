var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault(); //função que previni o comportamento padrão que é o de recarregar a pag.
    //ao inves disso imprime uma mensagem na tela
    // console.log("Oi eu sou o botao");
    var form = document.querySelector("#form-adiciona");

    // pegando o conteudo dos inputs do form;
    paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset(); //limpa todos os campos do form

});

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
    // var nomeForm = form.nome.value;
    // var pesoForm = form.peso.value;
    // var alturaForm = form.altura.value;
    // var gorduraForm = form.gordura.value;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr"); //criando uma tr dentro do html
    pacienteTr.classList.add("paciente");

    // modo sem utilizar a função montaTd();
    // var nomeTd = document.createElement("td"); // crianndo as TDs
    // nomeTd.classList.add("info-nome");
    // nomeTd.textContent = paciente.nome;

    // função para colocar cada uma dessas TD's como filho da TR paciente;
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.pseo, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    console.log(pacienteTr);

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

