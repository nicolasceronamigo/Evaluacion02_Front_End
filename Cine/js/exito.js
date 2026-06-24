// Página de éxito

const compra = JSON.parse(localStorage.getItem("compra"));

const nombre = compra["nombre"];
const pelicula = compra["pelicula"];
const cantidad = compra["cantidad"];
const sala = compra["sala"];
const pago = compra["pago"];

document.getElementById("nombre").innerHTML = nombre;
document.getElementById("pelicula").innerHTML = pelicula;
document.getElementById("cantidad").innerHTML = cantidad;
document.getElementById("sala").innerHTML = sala;
document.getElementById("pago").innerHTML = pago;

const btnCerrarSesion = document.getElementById("btnCerrar");
btnCerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("sesion");
    window.location.href = "login.html";
})