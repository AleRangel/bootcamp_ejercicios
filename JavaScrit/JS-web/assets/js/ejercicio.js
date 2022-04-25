const $parrafo = document.getElementById("parrafo");

addEventListener("keypress", (e) => {

    let keys = e.key
    let code = e.code
    let keycode = e.keyCode 
    /* let keycode = e.key  */


    $parrafo.innerHTML += keys;


    console.log("Letra",keys, "Code", code, "key",keycode)


})



