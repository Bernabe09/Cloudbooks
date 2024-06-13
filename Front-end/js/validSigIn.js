function validateFullName(input) {
    var fullName = input.value;
    // Validación de nombre completo
    if (!fullName.trim()) {
        document.getElementById("nameWarning").style.display = "block";
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        document.getElementById("nameWarning").style.display = "none";
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
}

function validateAge(input) {
    var age = input.value;
    var ageWarning = document.getElementById("ageWarning");
    // Validación de la edad
    if (isNaN(age) || age < 1 || age > 150) {
        input.classList.remove("valid");
        input.classList.add("invalid");
        ageWarning.style.display = "block";
    } else {
        input.classList.remove("invalid");
        input.classList.add("valid");
        ageWarning.style.display = "none";
    }
}


function validatePhone(input) {
    var phone = input.value;
    // Validación del número de teléfono
    var phoneRegex = /^[0-9]{0,10}$/; // Permitir hasta 10 dígitos
    if (!phone.match(phoneRegex)) {
        document.getElementById("phoneWarning").style.display = "block";
        input.classList.remove("valid");
        input.classList.add("invalid");
    } else {
        document.getElementById("phoneWarning").style.display = "none";
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
}

function validatePassword(input) {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var passwordError = document.getElementById("passwordError");

    if (confirmPassword !== "") {
        if (password !== confirmPassword) {
            passwordError.style.display = "block";
            document.getElementById("confirmPassword").classList.add("invalid");
            document.getElementById("confirmPassword").classList.remove("valid");
        } else {
            passwordError.style.display = "none";
            document.getElementById("confirmPassword").classList.remove("invalid");
            document.getElementById("confirmPassword").classList.add("valid");
            // Agregar clase 'valid' al campo de contraseña si coincide con la confirmación
            document.getElementById("password").classList.add("valid");
        }
    } else {
        document.getElementById("confirmPassword").classList.remove("invalid");
        document.getElementById("confirmPassword").classList.remove("valid");
        passwordError.style.display = "none"; // Oculta el mensaje de error si el campo de confirmación de contraseña está vacío
    }
}

function validateForm() {
    var inputs = document.querySelectorAll("input:not([type='submit'])");
    var valid = true;

    inputs.forEach(function(input) {
        if (!input.classList.contains("valid")) {
            valid = false;
            input.classList.add("invalid");
        }
    });

    return valid;
}
