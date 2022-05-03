/* Escriba una función de JavaScript para obtener los valores de Nombre y Apellido del siguiente formulario. Imprime los nombres en la consola. */





const $btn = document.getElementById("enviar");


$btn.addEventListener("click", (e)=>{
    const $form = document.getElementById("form1");
    
    let nombre = $form[0].value
    let Apellido = $form[1].value
    console.log(`Nombre: ${nombre}. Apellido ${Apellido}`);
})
    
    

