// Formulario

//nombre usuario
const nombre_usuario = JSON.parse(localStorage.getItem("sesion"))["usuario"];
document.getElementById("nombreUsuario").innerHTML = nombre_usuario;

const btnComprarEntradas = document.getElementById("btnComprarEntradas");
let div_errores = document.getElementById("errores");

btnComprarEntradas.addEventListener("click", () => {
    div_errores.innerHTML = "";

    const nombre = document.getElementById("nombre").value.trim();
    const pelicula = document.getElementById("pelicula").value;
    const cantidad = document.getElementById("cantidad").value;
    const sala = document.getElementById("sala").value;
    const pago = document.getElementById("pago").value;

    let errores = [];
    if (nombre === ""){
        errores.push("Debes ingresar el nombre.");
    }
    if (pelicula === ""){
        errores.push("Debes ingresar una película.");
    }
    if (cantidad === ""){
        errores.push("Debes ingresar una cantidad.");
    }
    if (parseInt(cantidad) > 10 || parseInt(cantidad) < 1){
        errores.push("Solo puedes comprar entre 1 a 10 entradas.")
    }
    if (sala === ""){
        errores.push("Debes ingresar una sala.");
    }
    if (pago === ""){
        errores.push("Debes ingresar un pago.");
    }
    if (errores.length > 0){
        div_errores.innerHTML = ` 
            <ul>
                ${errores.map(error => `<li>${error}</li>`).join("")}
            </ul>
            `;
    }
    else {
        const compra = {
            nombre,
            pelicula,
            cantidad,
            sala,
            pago
        };
        localStorage.setItem(
            "compra", 
            JSON.stringify(compra)
        );
        window.location.href = "exito.html";
    }
});