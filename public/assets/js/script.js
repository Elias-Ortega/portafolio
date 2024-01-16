
let btnEnviar = document.querySelector('#btnEnviar');
let nombre = document.querySelector('#nombre');
let apellido = document.querySelector('#apellido');
let correo = document.querySelector('#email');
let mensaje = document.querySelector('#mensaje');


btnEnviar.addEventListener('click', function () {
    if (nombre != '' && nombre.value.trim() && apellido != '' && apellido.value.trim() && correo != '' && correo.value.trim() && mensaje != '' && mensaje.value.trim()) {
        alert('Mensaje enviado con éxito');
    } else {
        evt.preventDefault();
    }


});