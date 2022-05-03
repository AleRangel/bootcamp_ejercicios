const url = "https://dog.ceo/api/breeds/image/random"

const imagen = document.getElementById("imagenPerrito")
const imagen2 = document.getElementById("imagenPerrito2")



//Fetch en una promesa de obtener algo
    //.then ejecutara un vez que se cumpla la promesa de fetch
        //
fetch(url).then(respuesta => respuesta.json()).then(datos => {
    console.log(datos);
    imagen.src = datos.message
})


//función asíncrona 
    //guardara en infoPerritos los datos de fetch cuando cumpla su promesa 
        //y ejecutara lo siguiente
async function obtenerPerrito(){
    const infoPerritos = await fetch(url)
    //Convertir el objeto json    
    const perrito = await infoPerritos.json()
    console.log(perrito);
    imagen2.src = perrito.message
}

obtenerPerrito()