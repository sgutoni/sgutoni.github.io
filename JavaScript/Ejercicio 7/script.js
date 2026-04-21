function mostrarResultado() {
    let nombre = document.getElementById("nombre").value;
    let provincia = document.getElementById("provincia").value;
    let pueblo = document.getElementById("pueblo").value;

    if (nombre === "" || provincia === "" || pueblo === "") {
        alert("Por favor, completa todos los campos");
        return;
    }

    let frase = `${nombre}, eres ${provincia} de ${pueblo}`;

    document.getElementById("resultado").innerHTML = frase;
}