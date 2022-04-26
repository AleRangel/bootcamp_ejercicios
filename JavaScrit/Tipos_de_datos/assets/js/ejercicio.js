


function mostrarEdad(){
    const $edad = document.getElementById("edad");
    
    let datosW = prompt("En que año naciste")
    let date = new Date()
    let año = Number(date.getFullYear());
    let edades = año - datosW
    console.log(edades,"años");
    $edad.innerHTML = edades + (" años");


}
/* mostrarEdad(); */
