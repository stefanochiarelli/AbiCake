//declaraciones de DOM
const wrapper = document.querySelector(".seccionTresDesk__buttonWrap");
const tortas = document.querySelector(".seccionTresDesk__mostreoTortas");
const desayunos = document.querySelector(".seccionTresDesk__mostreoDesayunos");
const cajas = document.querySelector(".seccionTresDesk__mostreoCajas");
const secAcordion = document.querySelector(".seccionTres");


//fin de declaraciones DOM

//evento


wrapper.addEventListener('click', (e) => {
   
   if (e.target.attributes[1].value) { 
    if(e.target.attributes[1].value === "boton1") {
        console.log('si loco soy el boton 1')
        tortas.style.display = 'block'
        desayunos.style.display = 'none'
        cajas.style.display = 'none'

    }else if (e.target.attributes[1].value === "boton2"){
        tortas.style.display = 'none'
        desayunos.style.display = 'block'
        cajas.style.display = 'none'

    } else if (e.target.attributes[1].value === "boton3"){
        tortas.style.display = 'none'
        desayunos.style.display = 'none'
        cajas.style.display = 'block'

    } else {
        null
    }
}
})

//Jump.js 


        
// const botonTortas = document.querySelector('.seccionUno__boton1')

// botonTortas.addEventListener('click', () => {
//     jump('.seccionTresDesk')
// })



