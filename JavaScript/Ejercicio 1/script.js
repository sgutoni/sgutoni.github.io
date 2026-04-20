function mostrarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = parseInt(document.getElementById("edad").value);

    let añoActual = new Date().getFullYear();
    let añoNacimiento = añoActual - edad;

    let mensaje = "";

    if (edad >= 18) {
        mensaje = nombre + " " + apellidos + " tiene " + edad + " años y es mayor de edad. Nació en " + añoNacimiento;
    } else {
        mensaje = nombre + " " + apellidos + " tiene " + edad + " años y es menor de edad. Nació en " + añoNacimiento;
    }

    document.getElementById("resultado").innerHTML = mensaje;
}