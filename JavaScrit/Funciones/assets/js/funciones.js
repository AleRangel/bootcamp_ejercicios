

/* 
?Funciones, nos permiten reutilizar código

*/




/* 
 ?Función declarada
*/
function saludar (nombre = "Sin nombre", apellido = "Sin nombre") {
    /* console.log("Hola mi nombre es:", nombre, apellido); */
    /* let nombre = "Alejandro"; */
    /* console.log(`Hola mi nombre es; ${nombre?"Alejandro"  : "desconocido"}`);//Template Strings */
    return `Mi nombre es ${nombre} ${apellido}`
}

//Se guarda el return en una variable 
let funcionSaludar = saludar("Alejandro","Andrade");

//mandamos a imprimir a pantalla lo que manda el return que se guardo en la variable
console.log(funcionSaludar);

//Podemos mandar a imprimir a pantalla el return de la función llamando la función desde el console log
console.log(saludar('Alberto','Hernandez').toLocaleUpperCase());

console.log(
    funcionSaludar.toLocaleLowerCase()
); 

/* --------------------------------------------------------------------- */













/* 
    ?Función declarada
*/
function suma(a,b) { //Pueden ser llamadas antes de ser declaradas
    return a+ b;
}

console.log(suma(10,20));

/* 
!------------------
 */











/* 
    ?Funciones expresadas \ función expresión
*/

const suma2 = function (a, b) {//No pueden ser llamadas antes de ser creadas
    
    return a + b
}


const resta = function (a,b) {
    return a - b
    
}
console.log(suma2(30,10));
console.log(resta(30, 10));















/* 
    ?Función flecha
*/
const multiplicacion = (a,b) => { //No podemos llamarla antes de ser creada
    return a * b;
}
const multiplicacion2 = (a,b) =>  a * b;


console.log(multiplicacion(5,5));
console.log(multiplicacion2(5,5));