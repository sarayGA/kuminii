let sugerencia = []; 
let nombre, email, img, mensaje; 

const main = document.getElementById('Gotas')

document.addEventListener('DOMContentLoaded', () => {
    MensajeDB()
})

const MensajeDB = async () => {
    try {
        const resultado = await axios.get ('http://localhost:3006/sugerencias')
        sugerencia = resultado.data 
        console.log(sugerencia)
        Gotas(sugerencia); 
    } catch (error){

    }
}

const Gotas = (sugerencia) => {
    console.log(sugerencia)

    main.innerHTML = ''

    sugerencia.forEach((data) => { 
        const {nombre, email, img, mensaje} = data
        console.log (data)
        const lluvia = document.createElement ('div')
        
        lluvia.innerHTML = 
        `<div class="drop" style="--clr:#efff0f;">
        <div class="content">
            <img src=${img}>
            <p class="titulos"> <strong>${email}</strong></p>
            <p>${mensaje}</p>
        </div>
    </div>`

    main.appendChild(lluvia)
        
    });
}