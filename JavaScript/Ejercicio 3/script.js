function mostrarEstacion() {
    let numero = parseInt(document.getElementById("numero").value);

    let estaciones = ["Invierno", "Primavera", "Verano", "Otoño"];

    let mensaje = "";

    if (numero >= 1 && numero <= 4) {
        mensaje = "La estación es: <b>" + estaciones[numero - 1] + "</b>";
    } else {
        mensaje = "Por favor, introduce un número entre 1 y 4.";
    }

    document.getElementById("resultado").innerHTML = mensaje;
}