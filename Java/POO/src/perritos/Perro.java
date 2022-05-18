package src.perritos;

public class Perro {
    
    String nombre = "Sin nombre";
    int años;
    String raza;
    String tamaño;


    //constructor
    public Perro (String nombre, int años, String raza, String tamaño){
        this.nombre = nombre;
        this.años = años;
        this.raza = raza;
        this.tamaño = tamaño;

    }


    public void ladrar(){
        
        System.out.println("El perro "+ nombre + " hace wouf \n");
    }
    public int años(){
        int edad = años * 7;
        System.out.println("El perro tiene una edad de: " + edad+"\n");
        return edad;
    }

    //Métodos estáticos
    //Static permite utilizar el método sin instanciar un objeto
    public static void mensaje(){
        System.out.println("Esto es una clase perro \n");
    }
    
}
