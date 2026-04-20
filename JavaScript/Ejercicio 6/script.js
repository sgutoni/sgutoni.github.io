function calcularPago() {
    let nombre = document.getElementById("nombre").value;
    let cantidad = parseFloat(document.getElementById("cantidad").value);

    let iva = 0;
    let total = 0;
    let mensaje = "";

    if (cantidad >= 5000) {
        iva = 0.10;
    } 
    else if (cantidad > 3000 && cantidad < 5000) {
        iva = 0.15;
    } 
    else if (cantidad <= 3000) {
        iva = 0.21;
    }

    total = cantidad + (cantidad * iva);

    mensaje = nombre + " debe pagar un total de " + total.toFixed(2) + " € (IVA aplicado: " + (iva * 100) + "%)";

    document.getElementById("resultado").innerHTML = mensaje;
}