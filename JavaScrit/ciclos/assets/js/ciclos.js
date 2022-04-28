// *Ciclos

/* 
    for
    for ...in
    .forEach
*/

//imprimir la prase "Hola mundo" 10veces

let elemento = [1,2,3,4];


for (let index = 0; index < 4; index++) {
    const element = elemento[index];
    console.log("For",element, "Hola mundo");
}


const object = [1,2,3,4];

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element2 = object[key];
        console.log("For-in",element2, "Hola mundo");
        
    }
}


const array=[1,2,3,4];

array.forEach(element3 => {
    console.log(".forEach",element3, "Hola mundo");
});





let i = 0;
while (i < 5) {
    console.log(i);
    i++
    
}


x = 0
do {
    debugger
    console.log(x);
    x++;
} while (x < 5); 