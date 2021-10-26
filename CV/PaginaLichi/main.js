//Escribir ScrollReveal más cómodo
window.sr = ScrollReveal();

//ScrollReveal
sr.reveal('.nav-main',{
    duration: 1500,
    origin: 'bottom',
    distance: '-100px'
});
sr.reveal('.main-photo',{
    duration: 2000,
    origin: 'top',
    distance: '-200px'
});
sr.reveal('.photo-1'),{duration: 2000}
sr.reveal('.photo-2'),{duration: 2000}
sr.reveal('.photo-int'),{duration: 1500}
sr.reveal('.photo-plan'),{duration: 1500}

function volver() {
    history.go(-1);
}