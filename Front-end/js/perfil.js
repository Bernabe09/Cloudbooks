//Metodo para la ejecucion del evento del submenu
document.addEventListener("DOMContentLoaded", function() {
    var userIcon = document.getElementById("user-icon");
    var userMenu = document.querySelector(".user-menu");
    userIcon.addEventListener("click", function(event) {
        userMenu.classList.toggle("active");
        event.stopPropagation(); 
    });
    document.addEventListener("click", function(event) {
        var isClickInside = userIcon.contains(event.target) || userMenu.contains(event.target);
        if (!isClickInside) {
            userMenu.classList.remove("active");
        }
    });
});