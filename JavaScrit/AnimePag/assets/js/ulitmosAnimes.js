const urlUltimos = "https://api.jikan.moe/v4/seasons/now"
const $ultimosAnimes = document.getElementById("ultimosAnimes")
/* const */

fetch(urlUltimos).then(respuesta => respuesta.json()).then(datos => {
    /* console.log(datos.data); */

    const arregloAnimesUltimos = datos.data.slice(0,16)
    /* console.log(arregloAnimesUltimos); */
    
    arregloAnimesUltimos.forEach((ultimoAnime) => {
        /* console.log(ultimoAnime); */


        //?Datos de la API
        const datosNecesarios = {
            nombre: ultimoAnime.title,
            imagen: ultimoAnime.images.jpg.image_url,
            id: ultimoAnime.mal_id,
            sinopsis: ultimoAnime.synopsis,
        }
        //?---------------

        const template = `
                <div class="col mb-4">
                  <div class="card">
                    <img src="${datosNecesarios.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${datosNecesarios.nombre}</h5>
                    </div>
                  </div>
                </div>
        `
        //?agregamos al contenedor padre
        $ultimosAnimes.innerHTML += template
        
        /* console.log(datosNecesarios); */
    })




})