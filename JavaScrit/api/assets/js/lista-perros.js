const url = "https://dog.ceo/api/breeds/list/all"





const $lista = document.querySelector("ul")
//!traer datos de api
fetch(url).then(resp =>resp.json().then(datos => {
   const terriers = datos.message.terrier
   console.log(terriers);
    terriers.forEach(terrie => {
        

        console.log(terrie);

        const template = `<li class="list-group-item">${terrie}</li>`

        $lista.innerHTML += template
        
        
    });

}))

