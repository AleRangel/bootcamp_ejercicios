/* const $padre=document.querySelector(".padre")


const $parr = document.createElement("p");

$parr.textContent = "xd"
$parr.textContent += "xd"
$parr.textContent += "xd"

$padre.appendChild($parr)

 */

/* Agregar elemntos con innerHTML */

const $cuadro = document.querySelector(".cuadro");

$cuadro.innerHTML=""; //inicializar el contenido del elemento

$cuadro.innerHTML='<a href="#">Este es un enlace</a><ol><li></li><li></li></ol>';
/* **************************************** */

const estaciones = ["primavera","verano","otoño","invieno"];

const $lista = document.createElement("ul");

estaciones.forEach(element => {
    const $li = document.createElement("li");
    $li.textContent = element
    $lista.appendChild($li)
    
});

document.body.appendChild($lista);

/* ----------------------------------------------- */


const continentes = ["Africa","América","Europa","Asia","Oceania"];


const $ol = document.createElement("ol");
$cuadro.appendChild($ol);

continentes.forEach(element => {  
    $ol.innerHTML += `<li>${element}</li>`
})

