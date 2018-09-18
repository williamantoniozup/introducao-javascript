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

    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return; // se o paciente não for válido ele vai sair desse function do botaoAdicionar
    }

    // if(!validaPaciente(paciente)){
    //     console.log("Paciente Inválido!");
    //     return; // se o paciente não for válido ele vai sair desse function do botaoAdicionar
    // }

    adicionaPacienteNaTabela(paciente);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset(); //limpa todos os campos do form

    var mensagemDeErro = document.querySelector("#mensagens-erro");
    mensagemDeErro.innerHTML = ""; //limpar ultimo conteudo das mensagens de erro.

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
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
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


function validaPaciente(paciente) {

    var erros = [];
    if (paciente.nome.length == 0) erros.push("Adicione um nome!");
    if (!validaPeso(paciente.peso)) erros.push("Peso Inválido!");
    if (!validaAltura(paciente.altura)) erros.push("Altura Inválida!");
    if (paciente.gordura.length == 0) erros.push("Adicione uma gordura!");
    if (paciente.peso.length == 0) erros.push("Adicione um peso!");
    if (paciente.altura.length == 0) erros.push("Adicione uma altura!");

    return erros;
}

function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMensagensDeErro(erros) {

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function (erro) {
        var li = document.createElement("li");
        li.classList.add("erro");
        li.textContent = erro;
        ul.appendChild(li);
    });
}