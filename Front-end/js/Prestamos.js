document.addEventListener("DOMContentLoaded", function() {
    var loanInfoContainer = document.getElementById("loanInfo");

    // Obtener los parámetros de la URL
    var urlParams = new URLSearchParams(window.location.search);
    var nombreLibro = urlParams.get("titulo");
    var nombreAutor = urlParams.get("autor");
    var nombreGenero = urlParams.get("genero");
    var fechaPublicacion = urlParams.get("anio");
    var nombrePrestatario = urlParams.get("nombre");
    var resumenLibro = urlParams.get("resumen");
    var numeroIdentificacion = urlParams.get("identificacion");
    var tituloLibro = urlParams.get("titulo");
    var fechaPrestamo = urlParams.get("fecha_prestamo");
    var fechaDevolucion = urlParams.get("fecha_devolucion");
    var informacionContacto = urlParams.get("contacto");

    // Mostrar la información del préstamo en la página
    var infoHTML = "<h2>Información del Préstamo:</h2>" +
                   "<p><strong>Nombre del libro solicitado:</strong> " + nombreLibro + "</p>" +
                   "<p><strong>Nombre del autor del libro:</strong> " + nombreAutor + "</p>" +
                   "<p><strong>Genero del libro:</strong> " + nombreGenero + "</p>" +
                   "<p><strong>Fecha de publicacion del libro:</strong> " + fechaPublicacion + "</p>" +
                   "<p><strong>Resumen del libro:</strong> " + resumenLibro + "</p>" +
                   "<p><strong>Nombre completo del prestatario:</strong> " + nombrePrestatario + "</p>" +
                   "<p><strong>Número de identificación:</strong> " + numeroIdentificacion + "</p>" +
                   "<p><strong>Título del libro:</strong> " + tituloLibro + "</p>" +
                   "<p><strong>Fecha de préstamo:</strong> " + fechaPrestamo + "</p>" +
                   "<p><strong>Fecha de devolución:</strong> " + fechaDevolucion + "</p>" +
                   "<p><strong>Información de contacto:</strong> " + informacionContacto + "</p>";

    loanInfoContainer.innerHTML = infoHTML;
});
