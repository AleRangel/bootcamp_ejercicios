class Persona{
    //ATRIBUTOS
    #id = 0;
    static #contador = 0;//!Importante
    #nombre = "";// ATRIBUTO PRIVADO
    #edad = 0;
    #correo = "";

    constructor(nombre, edad, correo){
    this.#nombre = nombre;
    this.#edad = edad;
    this.#correo = correo;
    this.#id =  ++Persona.#contador; //!Importante
    }

    /* MÉTODOS */
    /* setters & getters */
    /* set & get  "fijar & obtener" */ 

    get getNombre(){
        return this.#nombre;
    }
    get getEdad(){
        return this.#edad;
    }
    get getCorreo(){
        return this.#correo;
    }

    set setNombre(nombre){
        this.#nombre = nombre;
        
    }
    
    set setEdad(edad){
        this.#edad = edad;
        
    }
    
    set setCorreo(correo){
        this.#correo = correo;
        
    } 
    
    cambiarAtributos(nombre, edad, correo){
        
        this.#nombre = nombre;
        this.#edad = edad;
        this.#correo = correo
    }

    #saludar(){
        let mensaje = `"Hola mi nombre es ${this.#nombre}`
        return mensaje;
        
    }
    
    mostrarSaludo(){

        return this.#saludar();
    }

    static mostrarContador(){ //!static define al parámetro de la clase padre
        return console.log(Persona.#contador); 
    }
};

//?instancia de la clase persona
const persona1 = new Persona("Alejandro", 29, "ale@");
const persona2 = new Persona("karen", 26, "karen@");
const persona3 = new Persona("oliver", 24, "oliver@");

console.log(persona1);
console.log(persona2);
console.log(persona3);


console.log(persona1.getNombre,persona1.getEdad,persona1.getCorreo);


persona1.setNombre = "Alex"

console.log(persona2.getNombre,persona2.getEdad,persona2.getCorreo);

/* persona1.saludar()
persona2.saludar() */

console.log(persona1.mostrarSaludo());
console.log(persona2.mostrarSaludo());
console.log(persona3.mostrarSaludo());

Persona.mostrarContador()