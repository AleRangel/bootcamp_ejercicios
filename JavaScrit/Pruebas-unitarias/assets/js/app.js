const suma = (a,b)=>{
    return a - b;
}

/* console.log(suma(1,3) === 4);
console.log(suma(0,0) === 0); */

const arr = [
    {a:1,b:3, resultado : 4},
    {a:0,b:0, resultado : 4},
    {a:5,b:5, resultado : 10},
    {a:10,b:30, resultado : 40},
]

arr.forEach(prueba =>{
    const {a, b, resultado} = prueba; //destructuración
    console.assert(
        suma(a,b) === resultado,
        `Suma de ${a} y ${b} debería ser ${resultado}`
    );
    

});

/* console.assert(
    suma(1,3) === 4,
    "El resultado de la suma de 1 y 3 debería ser 4"
)

console.assert(
//?El resultado de 1,3 debería ser igual a 4 sino imprime lo siguiente
    suma(1,3) === 4,
    "El resultado de la suma de 1 y 3 debería ser 4"
) */