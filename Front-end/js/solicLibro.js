var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");
var loanForm = document.getElementById("loanForm");
var infoContainer = document.getElementById("infoContainer");
var enviarInfoBtn = document.getElementById("enviarInfo");

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

loanForm.onsubmit = function(event) {
    event.preventDefault();
    var nombreCompleto = document.getElementById("nombre_completo").value;
    var numeroIdentificacion = document.getElementById("numero_identificacion").value;
    var tituloLibro = document.getElementById("titulo_libro").value;
    var fechaPrestamo = document.getElementById("fecha_prestamo").value;
    var fechaDevolucion = document.getElementById("fecha_devolucion").value;
    var informacionContacto = document.getElementById("informacion_contacto").value;

    var infoHTML = "<h2>Información del Préstamo:</h2>" +
                   "<p><strong>Nombre completo del prestatario:</strong> " + nombreCompleto + "</p>" +
                   "<p><strong>Número de identificación:</strong> " + numeroIdentificacion + "</p>" +
                   "<p><strong>Título del libro:</strong> " + tituloLibro + "</p>" +
                   "<p><strong>Fecha de préstamo:</strong> " + fechaPrestamo + "</p>" +
                   "<p><strong>Fecha de devolución:</strong> " + fechaDevolucion + "</p>" +
                   "<p><strong>Información de contacto:</strong> " + informacionContacto + "</p>";

    infoContainer.innerHTML = infoHTML;
    modal.style.display = "none";
}
