package pokemon;

public class TipoPlanta extends Pokemon {
    
    //atributos
    int numeroHojas;
    
    public TipoPlanta(int id, int edad, int nivel, String nombre, boolean evolución, /* subClase atributo */int numeroHojas) {
        super(id, edad, nivel, nombre, evolución);
        
    }
    

    //metodos
    public void paralizar(){
        System.out.println("Paraliza");
    }
    public void envenenar(){
        System.out.println("Envenenar");
    }

}
