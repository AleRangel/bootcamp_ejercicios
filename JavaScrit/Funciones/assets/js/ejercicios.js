/* 
Crea un archivo ejercicios.js 
1- Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. 

2- Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. 

3- Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola". 

4- Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. 


*/

/* let palindromo = "Salas"

function validarPalindromo(p) {

    
    
} */



/*  *Ejercicio 1 */
function voltearPalabra(a = "") {


    if (a <= 1) {
        return console.warn("No ingresaste texto");

    }
    if (typeof (a) !== "string") {
        return console.warn("No es un texto");

    }

    let palabraVolteada = a.split('').reverse('').join('');
    /* console.log(palabraVolteada); */

    if (a === palabraVolteada) {
        console.log(`Si en un palindromo ${a}`);


    }
    else
        console.log("No es un palindromo");

}


voltearPalabra("salas")


/* Ejercicio 2 */

function miFuncion(palabra, veces) {



    for (let i = 0; i < veces; i++) {

        console.log(palabra);

    }

}
miFuncion("Hola mundo", 4)



/* Ejercicio 3 */
function txtSustraer(cadena, numeroLetras) {
    return cadena.substring(0, numeroLetras);
}

console.log(txtSustraer('Hola Mundo', 3));


/* opción b  */
function recortar(palabra, numero) {
    let palabraRecortada = palabra.substr(0, numero);

    console.log(palabraRecortada);
}
recortar("Hola mundo", 4);




/* Ejercicio 4 */
function fact(num) {
    var factorial = 1;
    for (i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
/*  */
console.log(fact(10))

function fact(num) {
    if (typeof (num) !== "number")
        return console.error("El dato ingresado no es un numero")

    let factorial = 1; for (i = 1; i <= num; i++) { factorial = factorial * i; }
    return console.log(factorial);
}



fact(5);



















