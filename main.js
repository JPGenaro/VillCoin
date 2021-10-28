/* NAVEGADOR */
const icono = document.querySelector('.icono');
const menu = document.querySelector('.navegar');

console.log(menu)
console.log(icono)

icono.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != icono    ){
            menu.classList.toggle("spread")
    }
}) 

// Cambiar modo claro/oscuro
var tipo = 0;
cambiarFondo();
function cambiarFondo(){
    if(tipo==0) {
        tipo=1;
        oscuro();
        document.getElementById("btn-background").innerText = "Modo Claro";
    }
    else {
        tipo = 0; 
        claro();
        document.getElementById("btn-background").innerText = "Modo Oscuro";
    }
}

// Modo Oscuro
function oscuro(){
    document.getElementById("body").style.backgroundColor = "#020202";
    document.getElementById("intro").style.backgroundColor = "black";
    document.getElementById("intro").style.color = "white";
    document.getElementById("introduccion").style.color = "white";
    document.getElementById("desarrolladores").style.color = "white";
    document.getElementById("desarrolladores").style.backgroundColor = "black";
    document.getElementById("des1").style.color = "white";
    document.getElementById("des2").style.color = "white";
    document.getElementById("des3").style.color = "white";
    document.getElementById("formulario").style.backgroundColor = "rgb(32, 29, 29)";
    document.getElementById("formulario").style.color = "white";
    document.getElementById("btnEnviar").style.backgroundColor = "#262626";
    document.getElementById("btnEnviar").style.color = "white";
    document.getElementById("nav").style.backgroundImage = "linear-gradient(135deg, #000000 0%, #303030 100%)";
    document.getElementById("1").style.color = "white";
    document.getElementById("2").style.color = "white";
    document.getElementById("3").style.color = "white";
    document.getElementById("4").style.color = "white";

}

// Modo Claro
function claro(){
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("intro").style.backgroundColor = "#c7c7c7";
    document.getElementById("intro").style.color = "black";
    document.getElementById("introduccion").style.color = "black";
    document.getElementById("desarrolladores").style.color = "black";
    document.getElementById("desarrolladores").style.backgroundColor = "#c7c7c7";
    document.getElementById("des1").style.color = "black";
    document.getElementById("des2").style.color = "black";
    document.getElementById("des3").style.color = "black";
    document.getElementById("formulario").style.backgroundColor = "#c7c7c7";
    document.getElementById("formulario").style.color = "black";
    document.getElementById("btnEnviar").style.backgroundColor = "grey";
    document.getElementById("btnEnviar").style.color = "white";
    document.getElementById("nav").style.backgroundImage = "linear-gradient(135deg, white 0%, grey 100%)";
    document.getElementById("1").style.color = "black";
    document.getElementById("2").style.color = "black";
    document.getElementById("3").style.color = "black";
    document.getElementById("4").style.color = "black";
}


// Aviso del formulario
function send() {
    // Obtener valores de Inputs
    var name = document.getElementById("inputName").value;
    var surname = document.getElementById("inputSurname").value;
    var gmail = document.getElementById("inputGmail").value;
    // Controlar inputs vacíos
    if (name != "" && surname != "" && gmail != "") {
        answer = window.confirm("Está seguro de que desea enviar el formulario?");
        if (answer == true) {
            //Ventana emergente
            window.alert("Formulario enviado exitosamente!");
        }
    }
    else {
        // Ventana emergente
        window.alert("Complete los campos restantes!");
    }
}

// Animaciones
ScrollReveal().reveal('.fotos-menu', {
    delay: 500, 
    duration: 1500
});
ScrollReveal().reveal('.otros-proyectos-dv', {
    delay: 500, 
    duration: 1500
});
ScrollReveal().reveal('.form', {
    delay: 500, 
    duration:1500
});
window.sr = ScrollReveal();
sr.reveal('.aptitudes-ft',{
    duration: 3000,
    origin: 'left',
    distance: '500px',
    delay: 1000
});
sr.reveal('.titulo-animacion',{
    duration: 3000,
    origin: 'bottom',
    distance: '-100px'
})
