const url = "https://dog.ceo/api/breeds/image/random"

fetch(url).then(respuesta => respuesta.json()).then(datos => {
    console.log(datos);
})