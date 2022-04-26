let palabra = "Hola mundo "

function voltearPalabra(a = "") {

    if (a <= 1) { return console.warn("No ingresaste texto");
        
    }
    if (typeof(a) !== "string") { return console.warn("No es un texto");
        
    }
    
    let palabraVolteada = a.split('').reverse('').join('');
    console.log(palabraVolteada);

}
voltearPalabra(123);



/* ----------------------------- */
const invertir = (word) => {
    var res = [];
    for (let i = word.length - 1; i >= 0; i--) {
        res.push(word[i])
    }
    console.log(res.join(''));
}
invertir('Hola mundo!')



/* -------------------------- */
const invertirCadena = cadena => {
    let nuevaCadena = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        nuevaCadena += cadena[i];
                
    }
    return nuevaCadena;
}

console.log(invertirCadena("Hola")); 
