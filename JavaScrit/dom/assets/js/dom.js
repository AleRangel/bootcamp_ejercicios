const $parrafo = document.querySelector("p");
//NodeName
console.log($parrafo.nodeName);

//TextContent
console.log($parrafo.textContent); //Mostrar el contenido

$parrafo.textContent += "Hola mundo"// Reasignara el contenido

const $titulo = document.querySelector("h1")

$titulo.textContent += " con JavaScript";




/* 
?innerHTML
No remplaza toda la etiqueta solo el contenido
*/
/* 


$parrafo.innerHTML += "<a href='#'> Este es un enlace </a>" //Agrega todo el contenido de html 
$parrafo.innerHTML = "<a href='#'> Este es un enlace </a>" //Remplaza todo el contenido de html
$parrafo.textContent += "<a href='#'> Este es un enlace </a>"//Solo sirve para texto */


/* 
?outerHTML
Remplaza toda la etiqueta de html
*/

/* $parrafo.outerHTML = "<a href=''>Remplaza todo el elemento seleccionado</a>" */


/*

 ?Crear elementos de html

*/
const $card = document.querySelector(".card");



function crearElemento(){
    /* Creamos un elemento              img va a ser */
    const img = document.createElement("img");

    /* appendChild 
            Agregar elementos
    */ 
    img.src= "https://www.zooplus.es/magazine/wp-content/uploads/2021/06/Lombrices-en-gatitos.jpg"


    $card.appendChild(img);
}

crearElemento();