document.getElementById("formulario").addEventListener("submit", function(e) {
    e.preventDefault();

    let n = parseInt(document.getElementById("numero").value);
    let suma = 0;

    for (let i = 0; i <= n; i++) {
        suma += i;
    }

    document.getElementById("resultado").textContent = 
        "La suma desde 0 hasta " + n + " es: " + suma;
});