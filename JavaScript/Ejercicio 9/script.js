function contarCaracteres() {
    let texto = document.getElementById("texto").value;

    let numeroCaracteres = texto.length;

    document.getElementById("resultado").innerHTML =
        `El texto tiene ${numeroCaracteres} caracteres`;
}