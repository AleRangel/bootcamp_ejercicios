package pokemon;
    



public class Chikorita extends TipoPlanta{
    
    //atributo específicos
    private int numeroCuernitos;

    //Constructor
    public Chikorita(int id, int edad, int nivel, String nombre, boolean evolución, /* subClase atributo */int numeroHojas, int numeroCuernos){
        super(id, edad, nivel, nombre, evolución, numeroHojas);
        this.numeroCuernitos = numeroCuernos;
    }

    public void latigo(){
        System.out.println((getNombre() + " uso latigo"));
    }

    public void atacar(){
        System.out.println(getNombre() + " ataque tipo planta");
    }

    public void setNumeroCuernitos(int numeroCuernitos) {
        this.numeroCuernitos = numeroCuernitos;
    }
    public int getNumeroCuernitos() {
        return numeroCuernitos;
    }

    
    

}
