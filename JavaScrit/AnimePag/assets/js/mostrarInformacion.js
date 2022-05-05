let idInf = window.location.href.split("=").pop()

const urlId = `https://api.jikan.moe/v4/anime/${idInf}`

const $imgPortada = document.getElementById("imgPortada")

const $informacionId = document.getElementById("informacionId")


fetch(urlId).then(respuesta => respuesta.json()).then(datos =>{

   /*  console.log(datos.data);
 */
    const datosNecesariosiD = {
        id : datos.data.mal_id,
        imagen : datos.data.images.jpg.large_image_url,
        sinopsis : datos.data.synopsis,
        nombre : datos.data.title,
    }
    /* insertar img */
    const templateImg = `<img src="${datosNecesariosiD.imagen}" alt="" class="img-fluid">`

    $imgPortada.innerHTML = templateImg

    /* insertar tamplate información */

    const templateInfo = `
    <h1>${datosNecesariosiD.nombre}</h1>
    <p>${datosNecesariosiD.sinopsis}</p>

    <button type="button" class="btn btn-dark" id="agregarFavoritos">Agregar a favoritos</button>

    `

    $informacionId.innerHTML = templateInfo
    
    const agregarFavoritos = document.getElementById("agregarFavoritos")
    /* console.log(agregarFavoritos); */

    agregarFavoritos.addEventListener('click', (e)=>{
        console.log("agregado");

        //?Local Storage "almacenamiento local"

        const datosS = {
            id : datosNecesariosiD.id,
            nombre : datosNecesariosiD.nombre,
            imagen : datosNecesariosiD.imagen,
        }

        if (localStorage.getItem("favoritos")) {console.log("Existe un elemento");

            const favoritos = JSON.parse(localStorage.getItem("favoritos"));
            /* datosGuardados = datosGuardados.filter((el) => el.nombre != datos.nombre)
            datosGuardados.push(datos) */
            
            favoritos.push(datosS)

            localStorage.setItem("favoritos",JSON.stringify(favoritos))

            

        } else {console.log("No tienes favoritos");

            const favoritos = []
            favoritos.push(datosS)

            localStorage.setItem("favoritos",JSON.stringify(favoritos))

        }

       

        


        
    })
})
