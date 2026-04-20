function obtenerEstacion() {
    let mes = document.getElementById("mes").value.toLowerCase();
    let estacion = "";

    if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
        estacion = "Invierno";
    } 
    else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
        estacion = "Primavera";
    } 
    else if (mes === "junio" || mes === "julio" || mes === "agosto") {
        estacion = "Verano";
    } 
    else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
        estacion = "Otoño";
    } 
    else {
        estacion = "Mes no válido. Por favor escribe un mes correcto.";
    }

    document.getElementById("resultado").innerHTML = "La estación es: " + estacion;
}