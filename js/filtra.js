var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function () {

    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");
            if (!expressao.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }

    // if (this.value.length > 0) {
    //     pacientes.forEach(function (paciente) {

    //         var tdNome = paciente.querySelector(".info-nome");
    //         var nome = tdNome.textContent;

    //         if (nome != this.value) {
    //             paciente.classList.add("invisivel");
    //         } else {
    //             paciente.classList.remove("invisivel");
    //         }
    //     });
    // }else{
    //     pacientes.forEach(function(){
    //         paciente.classList.remove("invisivel");
    //     });
    // }



}); 