
/* 
    ?Selectores 

    ?getElementById
         Devuelve una referencia al elemento por su ID
    ?querySelector 
        Devuelve el primer elemento del documento (utilizando un recorrido primero en profundidad pre ordenado de los nodos del documento) que coincida con el grupo especificado de selectores
    ?querySelectorAll
        De un Element devuelve una NodeList estática (no viva) que representa una lista de elementos del documento que coinciden con el grupo de selectores indicados


*/

//  "$" Para diferenciar una variable que guarda un elemento de dom
const $párrafo =document.getElementById('parrafo');
console.log($párrafo);
/* ------------------------------------------------- */



const $titulo =document.querySelector('h1');
const $tituloA =document.querySelector('[style]');

const $tituloC =document.querySelector('.titulo');

console.log($titulo);
console.log($tituloA);
console.log($tituloC);
/* ---------------------------------------------------- */




const $párrafos = document.querySelectorAll('p');
const $títulos = document.querySelectorAll('h1');


console.log($párrafos[1]);
console.log($párrafos.length);






