const inputFoto = document.getElementById('foto');
const enviarBtn = document.getElementById('enviar');
const imagenMostrada = document.getElementById('imagen-mostrada');

inputFoto.addEventListener('change', function() {
    const file = inputFoto.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imagen = new Image();
            imagen.src = e.target.result;
            imagenMostrada.innerHTML = '';
            imagenMostrada.appendChild(imagen);
        };
        reader.readAsDataURL(file);
    }
});

enviarBtn.addEventListener('click', function(event) {
    // Aquí puedes enviar la imagen al servidor o realizar cualquier otra acción.
    event.preventDefault(); // Esto evita que se envíe el formulario por defecto.
});
