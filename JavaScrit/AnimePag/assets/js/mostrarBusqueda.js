let busquedaInf = window.location.href.split("=").pop()

/* console.log(busquedaInf); */

const urlBusqueda = `https://api.jikan.moe/v4/anime?q=${busquedaInf}&order_by=popularity`

const $busquedaAnimes =document.getElementById("busquedaAnimes")

const $titulo = document.getElementById("buscar")

fetch(urlBusqueda).then(repuesta => repuesta.json()).then(datos => {
    console.log(datos);

    const resultadosBusqueda = datos.data.slice(0,16)

    resultadosBusqueda.forEach((resultadoBusqueda) => {

        /* console.log(resultadoBusqueda); */

        const datosNecesariosBusqueda = {
            nombre : resultadoBusqueda.title,
            imagen : resultadoBusqueda.images.jpg.image_url,

        }

        const templateBusqueda = `
                <div class="col mb-4 p-1">
                  <div class="card">
                    <img src="${datosNecesariosBusqueda.imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${datosNecesariosBusqueda.nombre}</h5>
                    </div>
                  </div>
                </div>          
        `
        
        $titulo.innerHTML =  busquedaInf.toUpperCase()

        $busquedaAnimes.innerHTML += templateBusqueda
        /* console.log(datosNecesariosBusqueda); */
        
        
        
    } )
    


})