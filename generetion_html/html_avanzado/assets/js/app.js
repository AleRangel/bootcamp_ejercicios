//Por defecto busca id en el html
const color = document.querySelector("#inputColor")
console.log(color);

//escucha eventos en el html  change escucha cambios y cuando esto ocurra se ejecuta la función
color.addEventListener("change", function (e) {
    //mandamos a llamar al dom en la etiqueta body aplicamos estilo desde js que va de objetivo al valor que cambia del id"inputColor"
    document.body.style.backgroundColor = e.target.value;
})

/* --Datos del formulario 2-------- */
const formulario = document.querySelector("#formDatos")
console.log(formulario);

formulario.addEventListener("submit", function (e){
//  preventDefault corta la "ejecución del submit" para que puedas ejecutar la función
    e.preventDefault()
    //creamos un objeto con los valores y métodos del elemento que llamamos del html
    const datos =Object.fromEntries(
        //y lè damos formato a los datos del objeto para acceder y leerlos mas fácil 
        new FormData(e.target)
    )
    /* -------------------------------------------- */
    console.log(datos);
} )