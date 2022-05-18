package src.perritos;

public class pruebaPerro {
    public static void main(String[] args){
        

        Perro.mensaje();
        
        Perro perro1 = new Perro("Patitas",3,"Husky","mediano");
        
        //Cambiar sus atributos
        /* perro1.nombre = "patitas";
        perro1.edad = 3;
        perro1.raza = "Husky";
        perro1.tamaño = "Mediano"; */
        
        //Método
        perro1.ladrar();
        
        //instancia
        Perro perro2 = new Perro("Cookies",13,"Dalmanta","Grande");
        
        perro2.ladrar();
        perro2.años(); 

        
    }
    
}
