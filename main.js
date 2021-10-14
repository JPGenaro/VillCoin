/* AVISO DEL FORMULARIO*/
function send() {
    // Obtener valores de Inputs
    var name = document.getElementById("inputName").value;
    var surname = document.getElementById("inputSurname").value;
    var gmail = document.getElementById("inputGmail").value;
    // Controlar inputs vacíos
    if (name != "" && surname != "" && gmail != "") {
        //Ventana emergente
        window.alert("Formulario enviado exitosamente!");
        
    }
    else {
        // Ventana emergente
        window.alert("Complete los campos restantes!");
    }
}

/*ANIMACIONES*/
ScrollReveal().reveal('.fotos-menu', {delay: 500}, {duration: 5000});

window.sr = ScrollReveal();
    sr.reveal('.aptitudes-ft',{

        duration: 4000,
        origin: 'left',
        distance: '400px'
        
        
    });