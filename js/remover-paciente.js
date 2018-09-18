
// var pacientes = document.querySelectorAll(".paciente");
// pacientes.forEach(function (paciente) {
//     paciente.addEventListener("dblclick", function () {
//         console.log("fui clicado com double click!");
//         this.remove();
//     });
// });

var table = document.querySelector("table");

table.addEventListener("dblclick", function (event) {
    // console.log(event.target);
    // var alvoEvento = event.target;
    // var paiDoEvento = alvoEvento.parentNode;
    // paiDoEvento.remove();
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500); //milissegudos, 1000ms = 1s/500ms = 0.5s
});