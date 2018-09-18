// https://api-pacientes.herokuapp.com/pacientes
/*API, um interface de programação que disponibiliza os dados para gente.
- a gente não sabe da onde veio esses  dados, como foram gerados, somente
nos entrega algo pronto para nós usarmos.
Api disponibiliza funcionalidades, métodos, funções.
*/

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function () {

    var xhr = new XMLHttpRequest(); //objeto do javascript responsável por fazer requisições http
    var url = "https://api-pacientes.herokuapp.com/pacientes";
    //vai ensinar o objeto qual tipo de req a gente quer fazer e pra onde.
    xhr.open("GET", url); //configurando a conexao, ainda não enviei a requisição

    xhr.addEventListener("load", function () { // quando sua resposta tiver carregada, executa uma função pra mim
        // console.log(xhr.responseText);
        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200) { //ocorreu td bem
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText; // é um textão -- td como string
            // console.log(typeof resposta);
            console.log(resposta);

            var pacientes = JSON.parse(resposta); // transformar em um array

            console.log(pacientes);
            console.log(typeof pacientes);

            pacientes.forEach(function (paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel"); // mostra a mensagem de erro ao cliente
        }


        /*Técnica de AJAX, fazer uma requisição de modo assíncrono, pois
        ele não esta parando o fluxo do nosso javascript, ele não trava
        meu javascript pra ir lá e buscar uma informação em outro site
        basicamente, fazer requisições com seu javascript de modo 
        assíncrono, sem precisar meu navegador */
    });

    xhr.send(); //para enviar a requisição
});