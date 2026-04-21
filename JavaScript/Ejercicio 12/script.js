const recetas = [
    { id: 1, nombrereceta: "Salmorejo", ingredientes: "tomate,aceite,pan" },
    { id: 2, nombrereceta: "Gachas", ingredientes: "harina,agua,azucar" },
    { id: 3, nombrereceta: "Migas", ingredientes: "pan,ajos,aceite" }
];

function mostrarRecetas() {
    let contenedor = document.getElementById("contenedor");

    // Crear tabla
    let tabla = "<table>";
    
    // Cabecera
    tabla += `
        <tr>
            <th>ID</th>
            <th>Nombre receta</th>
            <th>Ingredientes</th>
        </tr>
    `;

    // Filas
    recetas.forEach(receta => {
        tabla += `
            <tr>
                <td>${receta.id}</td>
                <td>${receta.nombrereceta}</td>
                <td>${receta.ingredientes}</td>
            </tr>
        `;
    });

    tabla += "</table>";

    // Insertar en el DIV
    contenedor.innerHTML = tabla;
}