/* CONSUMÓ DE API  */
/*  */
/* 

let datos
setTimeout(()=>{// ?no bloqueante
    datos = "alex"
    console.log("ejecutado despues de 3 segundos",datos);
    
}, 5000)

console.log(datos);
console.log("hola"); */

const datos = [
    {
        nombre : "Alex",
        edad : 29,
    },
    {
        nombre : "Karen",
        edad : 26,
    },
    {
        nombre : "Oli",
        edad : 23,
    },
    {
        nombre : "Alex",
        edad : 29,
    },
]


//?------------------------------------------------------------------
function obtenerDatos(){ 
    
                            //promesa
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(datos)
        }, 3000)
    })
}


//!forma1 efectiva
// *.then (datos) = una vez que resuelva la promesa que ejecute algo en este caso log.datos

obtenerDatos().then((datos) =>{
    console.log(datos);
}); 

//?------------------------------------------------------------------


// *Crea una funcion asincrona
//?------------------------------------------------------------------
async function obtenerDatosAsync (){ //sin diferencia a una función normal esperara algo

//*guarda los datos obtenidos "await" espera los datos, una vez que llega guarda los datos 

    const datosObtenidos = await obtenerDatos()
    console.log(datosObtenidos);
}

obtenerDatosAsync()
//?------------------------------------------------------------------

/* APi */