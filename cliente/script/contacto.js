
let formulario = document.getElementById('forms')

formulario.addEventListener ( 'submit', (e) => {
    e.preventDefault () 
    Add ()
}
)


const Add = () => {
let nombre = document.getElementById('nome').value
let Email = document.getElementById('email').value
let comentario = document.getElementById('comment').value
let imagen = document.getElementById('foto').value
console.log (nombre)

    axios.post  ('http://localhost:3006/crear', {
        nombre: nombre,
        email:Email,
        mensaje:comentario,
        img:imagen,
    }).then (() => {console.log('Registro bien')})

}
    
document.getElementById("custom-upload-button").addEventListener("click", function () {
    document.getElementById("archivo").click();
  });

  function mostrarNombreArchivo() {
    var input = document.getElementById("foto");
    var nombreArchivo = input.value.split('\\').pop(); // Obtener el nombre del archivo
  
    if (nombreArchivo) {
      alert("Nombre del archivo seleccionado: " + nombreArchivo);
    } else {
      alert("No se ha seleccionado ningún archivo.");
    }
  }
/*




// carga de imagen


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


*/
