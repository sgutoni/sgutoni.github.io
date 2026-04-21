const FACTOR = 1.60934;

function kmAMillas() {
    let valor = document.getElementById("valor").value;

    if (valor === "") {
        alert("Introduce un valor");
        return;
    }

    let resultado = valor / FACTOR;
    document.getElementById("resultado").innerHTML =
        `${valor} km son ${resultado.toFixed(2)} millas`;
}

function millasAKm() {
    let valor = document.getElementById("valor").value;

    if (valor === "") {
        alert("Introduce un valor");
        return;
    }

    let resultado = valor * FACTOR;
    document.getElementById("resultado").innerHTML =
        `${valor} millas son ${resultado.toFixed(2)} km`;
}