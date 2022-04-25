/* window.addEventListener('load', (e) =>{
   this.alert('Se ha terminado de cargar la pagina') 
});
 */


function saludar(){
    alert('Hola');
    
}
/* 
    ?Manejador de evento semántico

*/
const $botonSemantico = document.getElementById("botonIdEventoSemantico");


// Solo permite tener una funcion a la vez
$botonSemantico.onclick = saludar;

$botonSemantico.onclick = function(e){

    /* alert("hola desde un manejador semántico"); */
    console.log(e.target);

}





/* 

    ?Manejador de eventos multiple


*/

const $botonMultiple = document.getElementById("botonIdEventoMultiple")


$botonMultiple.addEventListener("click", (e) => {
        alert("botonIdEventoMultiple");
    });


$botonMultiple.addEventListener('click', function(e)
{
        console.log(e.target);

});

/* ----------------------------------------------------------- */



function saludarMultiple(){
    alert("Hola soy función");

}

$botonMultiple.addEventListener("click", saludarMultiple)



