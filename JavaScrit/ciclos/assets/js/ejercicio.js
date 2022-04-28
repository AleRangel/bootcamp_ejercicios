/* for (let i = 0; i <= 5; i++) {
    let resultado =""

    for (let j = 0; j < i; ++j) {
        resultado += "* ";
        
    }
    console.log(resultado);
}
 */


/* Ejercicio 1 */

//Escribe un loop que haga lo siguiente:

//Repetidamente imprime el valor de la variable xValue, disminuyendo por 0.5 su valor cada iteración.
//El ciclo se mantendrá mientras que el valor de xValue sea positivo.


for(let a = 5; a>=0; ){
    a = a - 0.5
    /* a = a + 0.5; */
    
    console.log(a);
    
}



/* Ejercicio 2 */
//Imprime todos los números impares entre 1 y 100


/* Ejercicio 2 */
for(let i=1; i<=100; i++) {
    if(i%2 > 0) {
        console.log(i);
    }
}


/* Ejercicio 3 */
//Escribe un ciclo while que imprima de 1 a n dentro de corchetes cuadrados
//Por ejemplo: si n = 6 imprime [1] [2] [3] [4] [5] [6]


    
const numero1 = prompt("Ingresa un número:");
let control = 0;
let arreglo  = [];
while(control < numero1) {
    arreglo[control] = control + 1;
    console.log(`[${arreglo[control]}]`);
    control++;
}

/* Ejercicio 4 */
//Escribe un ciclo que calcule la suma de los numeros positivos entre 1 y n
//ejemplo: n = 5 sum = 15     
//por que (1 + 2 + 3 + 4 +5 )


/* Ejercicio 4 */
let numero2 = prompt("Ingresa un número:");
let suma = 0;
for(let i=1; i<=numero2; i++) {
    console.log(suma);
    suma = suma + i;
}
console.log("El resultado es: " + suma);
