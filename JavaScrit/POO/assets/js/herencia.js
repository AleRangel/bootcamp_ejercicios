class Pokemon{
    //Atributos
   
    #nombre = "";
    #edad = "";
    #evolucion = "";
    
    
    constructor(nombre, edad, evolucion, ){
        this.#nombre = nombre
        this.#edad = edad;
        this.#evolucion = evolucion;
        
    }

    atacar(){
        return console.log(`${this.#nombre}, esta atacando`);
    }

    

    evolucionar(){
        let mensaje = ''
        
        if(this.#evolucion === ''){
            mensaje = 'No puedo evolucionar';
            console.log(mensaje) 
        }else{
            mensaje = `${this.#nombre} ha evolucionado a ${this.#evolucion}`;
            this.#nombre = this.#evolucion;
            console.log(mensaje);
        }

        
    } 

}

/*
const charmander = new Pokemon("Charmander", 2, "charmeleon");
const bulbasour = new Pokemon("Bulbasour", 1, "Ivysaur") 

console.log(charmander);
console.log(bulbasour);

charmander.atacar()
bulbasour.atacar()

charmander.evolucionar()
*/

class TipoFuego extends Pokemon{
    #tipo = "";
    constructor(nombre,edad,evolucion){
        super(nombre, edad, evolucion);
        this.#tipo = "Fuego";
    }

    
    atacar(){
        return console.log(`${super.nombre}, está atacando con ${this.#tipo}`)
    }
}

const charmander = new TipoFuego("Charmander",2,"charmeleon");

console.log(charmander);


charmander.atacar();
charmander.evolucionar()