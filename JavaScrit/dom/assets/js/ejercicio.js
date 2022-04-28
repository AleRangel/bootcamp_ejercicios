
const $card = document.querySelector(".card");
const $form = document.querySelector("form");

$form.addEventListener("submit", (e) => {
    e.preventDefault();

    const datosForm = Object.fromEntries(
        new FormData(e.target)
    )
    console.log(datosForm.url, datosForm.texto);
    
    crearElemento(datosForm.url, datosForm.texto);
    $form.reset();
    });



function crearElemento(url,texto){
    /* Creamos un elemento              img va a ser */
    const img = document.createElement("img");
    const txt = document.createElement("figcaption");

    /* appendChild 
            Agregar elementos
    */ 
    img.src= url
    img.alt = texto

    txt.textContent = texto

    $card.appendChild(img);
    $card.appendChild(txt);
}



