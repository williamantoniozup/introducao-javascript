// https://api-pacientes.herokuapp.com/pacientes
    /*API, um interface de programação que disponibiliza os dados para gente.
    - a gente não sabe da onde veio esses  dados, como foram gerados, somente
    nos entrega algo pronto para nós usarmos.
    Api disponibiliza funcionalidades, métodos, funções.
    */

var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){
    
    var xhr = new XMLHttpRequest(); //objeto do javascript responsável por fazer requisições http
    var url = "https://api-pacientes.herokuapp.com/pacientes";
    //vai ensinar o objeto qual tipo de req a gente quer fazer e pra onde.
    xhr.open("GET",url); //configurando a conexao, ainda não enviei a requisição
    
    xhr.addEventListener("load",function(){ // quando sua resposta tiver carregada, executa uma função pra mim
        console.log(xhr.responseText);
    });
    
    xhr.send(); //para enviar a requisição
});