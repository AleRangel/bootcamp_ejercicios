const urlTop = "https://api.jikan.moe/v4/top/anime"
const $listaGrupo = document.getElementById("listaGrupo")

fetch(urlTop).then(respuesta => respuesta.json()).then(datos =>{
    /* console.log(datos.data.slice(0,8)); */

    const animesTop = datos.data.slice(0,8)

    animesTop.forEach((animeTop) => {
       /*  console.log(animeTop); */


        const datosNecesariosTop = {
            nombre : animeTop.title,
            
        }

        const templateTop = `
        <a href="#" class="list-group-item list-group-item-action">${datosNecesariosTop.nombre}</a>

        `

        $listaGrupo.innerHTML += templateTop

        /* console.log(datosNecesariosTop); */

    })
    

})