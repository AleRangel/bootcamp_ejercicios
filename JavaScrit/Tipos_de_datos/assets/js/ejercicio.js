
/* 
Nivel 1 
*/

/* 
const anioNacimiento = parseInt(prompt("Escribe tu año de nacimiento: "));
const anioActual =2022;
console.log(anioNacimiento);

console.log(`Tienes ${anioActual - anioNacimiento} años`);

 */




/* ------------------------------------------------------------------- */

/* 
Nivel 2 
*/

/* function calcularEdad () {
    
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento);   

     Año actual
    let date = new Date()
    const anioActual = Number(date.getFullYear());
    

    console.log(`Tienes ${anioActual - anioNacimiento} años`);
}
 */


/* Nivel 2 opción 2 */

/* const boton = document.getElementById("btn-Calcular");

boton.addEventListener("click", () =>{    
    const anioNacimiento = parseInt(document.getElementById("anio").value);
    console.log(anioNacimiento);
    
    let date = new Date()
    const anioActual = Number(date.getFullYear());
    
    console.log(`Tienes ${anioActual - anioNacimiento} años`);
 }) */

/* -------------------------------------------------------------- */



const fecha = new Date()

const anioActual = fecha.getFullYear()
const mesActual = fecha.getMonth()+1
const diaActual = fecha.getDate()

console.log(anioActual,mesActual,diaActual);


function mostrarDatos(){
    const nacimiento = document.getElementById("anio").value;
    console.log(nacimiento);
    const nacimientoDividido = nacimiento.split("-");
    console.log(nacimientoDividido);

    const anio  = parseInt(nacimientoDividido[0]);
    const mes  = parseInt(nacimientoDividido[1]);
    const dia = parseInt(nacimientoDividido[2]);

    console.log(anio,mes,dia);

    if(mes <= mesActual && dia <= diaActual){
        console.log(`Tienes ${anioActual - anio} años`);
    }
    else{
        console.log(`Tienes ${anioActual - anio - 1} años`);

    }

} 




/* function mostrarEdad(){
    const $edad = document.getElementById("edad");
    
    let datosW = prompt("En que año naciste")
    let date = new Date()
    let año = Number(date.getFullYear());
    let edades = año - datosW
    console.log(edades,"años");
    $edad.innerHTML = edades + (" años");


}
mostrarEdad();



 */