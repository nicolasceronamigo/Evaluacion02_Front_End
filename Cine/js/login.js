// Implementar login

const usuario_correcto = "nicolas.ceron";
const password_correcta = "JS2026NC06";

let errores = []
let div_errores = document.getElementById("errores")

function login(){
    let usuario = document.getElementById("usuario").value.trim();
    let password = document.getElementById("password").value.trim();

    div_errores.innerHTML = "";
    errores = [];
    if (usuario === ""){
        //usuario vacio
        errores.push("Error: Debe ingresar el usuario.")
    }else if (usuario !== usuario_correcto){
        //usuario incorrecto
        errores.push("Error: Usuario incorrecto.")
    }if(password === ""){
        //contraseña vacia
        errores.push("Error: Debe ingresar la contraseña.")
    }else if (password !== password_correcta){
        //contraseña incorrecta
        errores.push("Error: Contraseña incorrecta.")
    }
    if(usuario === usuario_correcto && password === password_correcta ){
        //acceso y redireccion
        let sesion = {
            usuario,
            password
        }
        localStorage.setItem("sesion", JSON.stringify(sesion))
        window.location.href = "formulario.html";
    }
    if (errores.length > 0){
        //mapo de errores
        div_errores.innerHTML = ` 
            <ul>
                ${errores.map(error => `<li>${error}</li>`).join("")}
            </ul>
        `;
    }
}

const btnIngresar = document.getElementById("btnIngresar");
btnIngresar.addEventListener("click", () => login())
