const db = [
  {
    url: "https://placeimg.com/200/200/animals",
    title: "Animales",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sit repudiandae",
  },
  {
    url: "https://placeimg.com/200/200/people",
    title: "People",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sit repudiandae",
  },
  {
    url: "https://placeimg.com/200/200/nature",
    title: "Naturaleza",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sit repudiandae",
  },
  {
    url: "https://placeimg.com/200/200/Arch",
    title: "Arquitectura",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sit repudiandae",
  },
  {
    url: "https://placeimg.com/200/200/tech",
    title: "Tecnología",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sit repudiandae",
  },
  {
    url: "https://placeimg.com/200/200/tech",
    title: "Tecnología",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates sit repudiandae",
  },
];
console.log(db[0]);
const $cards = document.getElementById("cards");
$cards.innerHTML = "";

db.forEach((objeto) => {
  $cards.innerHTML += `
    <div class="col mb-4">
    <div class="card">
      <img src="${objeto.url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${objeto.title}</h5>
        <p class="card-text">${objeto.description}</p>
      </div>
    </div>
  </div>
    `;
});

//Convertir un objeto Json a un strig
const dbJSON = JSON.stringify(db);
console.log(dbJSON);


//Convertir nuevamente a un JSON

console.log(JSON.parse(dbJSON));
/* parse. convierte un a cadena de texto a un objeto de tipo json */
