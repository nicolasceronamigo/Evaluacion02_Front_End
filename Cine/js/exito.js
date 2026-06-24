// Implementar página de éxito

const compra = JSON.parse(localStorage.getItem("compra"));

const nombre = compra["nombre"];
const pelicula = compra["pelicula"];
const cantidad = compra["cantidad"];
const sala = compra["sala"];
const pago = compra["pago"];

document.getElementById("dato1").innerHTML = nombre;
document.getElementById("dato2").innerHTML = pelicula;
document.getElementById("dato3").innerHTML = cantidad;
document.getElementById("dato4").innerHTML = sala;
document.getElementById("dato5").innerHTML = pago;

const btnCerrarSesion = document.getElementById("btnCerrar");
btnCerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("sesion");
    window.location.href = "login.html";
})