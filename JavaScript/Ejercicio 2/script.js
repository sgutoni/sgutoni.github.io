function comprobarNumero() {
    let numero = parseInt(document.getElementById("numero").value);
    let mensaje = "";

    if (numero < 1 || numero > 30 || isNaN(numero)) {
        mensaje = "Por favor, introduce un número válido entre 1 y 30.";
    } else {
        if (numero % 2 === 0) {
            mensaje = "El número " + numero + " es divisible por 2.";
        } else {
            mensaje = "El número " + numero + " NO es divisible por 2.";
        }
    }

    document.getElementById("resultado").innerHTML = mensaje;
}