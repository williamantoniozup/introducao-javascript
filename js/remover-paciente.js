
// var pacientes = document.querySelectorAll(".paciente");
// pacientes.forEach(function (paciente) {
//     paciente.addEventListener("dblclick", function () {
//         console.log("fui clicado com double click!");
//         this.remove();
//     });
// });

var table = document.querySelector("table");

table.addEventListener("dblclick", function(event){
    console.log(event.target);
    var alvoEvento = event.target;
    var paiDoEvento = alvoEvento.parentNode;

    paiDoEvento.remove();
});