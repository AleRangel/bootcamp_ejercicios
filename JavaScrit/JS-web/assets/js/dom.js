/* 
    Algunas cosas que podemos hacer con DOM 

*/
/* 
    ?Propiedades
*/
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body); 
//console.log(document.documentElement);// regresa todo el html

console.log(document.links); // Manda una colección de enlaces  "html colección"

console.log(document.images);

console.log(document.styleSheets);

/* 
    ?Métodos

*/
// ?Retrasa la función con un tiempo determinado
setTimeout(() => {
                        //Muestra el texto seleccionado
    console.log(document.getSelection().toString());

}, 3000);


document.write('<h1>Hola mundo desde un write</h1>')
