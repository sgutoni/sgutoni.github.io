function compararPalabras() {
    let p1 = document.getElementById("palabra1").value;
    let p2 = document.getElementById("palabra2").value;

    if (p1.length > p2.length) {
        alert("La palabra con más caracteres es: " + p1);
    } else if (p2.length > p1.length) {
        alert("La palabra con más caracteres es: " + p2);
    } else {
        alert("Ambas palabras tienen el mismo número de caracteres");
    }
}