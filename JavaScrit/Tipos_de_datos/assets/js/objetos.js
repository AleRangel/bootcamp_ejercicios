/* 
    ?Objetos
*/

const nombre = new String("Alex")

console.log(nombre);



/* const persona = new Object(); // Crear un nuevo objeto
persona.nombre = "Alex"
persona.apellido = "Andrade"
persona.edad= 23

console.log(persona); */

const persona = {
    nombre: "Ale",
    apellido: "Andrade",
    edad: 28,

    acciones: ["Aprender", "Comer", "Jugar"],

    familia: {
        Hermano: "Miguel",
        Novia: "Karen",
        Mama: "Maria",
        Papa: "Oscar",
    },

    Estudia: true,

    saludar: function () { // ?Método de la clase
        console.log("Hola");
    }

}

console.log(persona.nombre); //atributo
console.log(persona.acciones[0]); //atributo array
console.log(persona.familia.Hermano); //atributo clase

persona.saludar() //método

/* 
    Para cambiar el valor
*/

persona.edad = 10

console.log(persona.edad);


/* 
    Agregar atributo
*/

persona.colorFav = "Morado"

console.log(persona);


console.log(
    persona.hasOwnProperty("edad"), //Para saber si tiene una propiedad,
    Object.keys(persona),
    Object.values(persona)
);





const Alex = { /* atributos o datos como info */ 
nombreCompleto: { 
    nombre: "Alejandro",
    apellido: "Andrade" 
},      edad: 28,
    pasatiempos: ["programar", "leer", "mecanografiá"], 
}

const Adolfo = { /* atributos o datos como info */ 
nombreCompleto: { 
    nombre: "Adolfo",
    apellido: "Gutierrez",
},     
    edad: 28,
    pasatiempos: ["ajedrez", "box", "leer"], 
}

const Gabriel = {
    nombreCompleto: {
    nombre: "ganriel",
    apellido: "gonzalez"
},
    edad: 20,
    pasatiempos: ["jugar","salir","correr"],
} 


const chorte12 = [Alex,Adolfo,Gabriel];

console.log(chorte12);

for (let i=0; i<chorte12.length; i++){
    if(chorte12[i].pasatiempos.includes("leer")){
        console.log(chorte12[i].nombreCompleto.nombre);
    }
}