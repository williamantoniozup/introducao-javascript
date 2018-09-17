
var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function (paciente) {
    paciente.addEventListener("dblclick", function () {
        console.log("fui clicado com double click!");
        this.remove();
    });
});