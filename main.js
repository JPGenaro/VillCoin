var tipo = 1;
cambiarFondo();
function cambiarFondo(){
    console.log("cambiar");
    if(tipo==0) {
        tipo=1;
        oscuro();
    }
    else {
        tipo = 0; 
        claro();
    }
}
function oscuro(){
    
}
function claro(){
    console.log("funco");
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("intro").style.backgroundColor = "#c7c7c7";
    document.getElementById("intro").style.color = "black";
    document.getElementById("introduccion").style.color = "black";
    document.getElementById("desarrolladores").style.color = "black";
    document.getElementById("desarrolladores").style.backgroundColor = "#c7c7c7";
    document.getElementById("des1").style.color = "black";
    document.getElementById("des2").style.color = "black";
    document.getElementById("des3").style.color = "black";
    document.getElementById("footer").style.backgroundColor = "#3b3b3b";
}


/* AVISO DEL FORMULARIO*/
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

/*ANIMACIONES*/
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