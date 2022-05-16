package comCalculadora;

public class Calculadora {
    

    //Método que no regresa nada - VOID
    public void mensajeSumar(){
        System.out.println("Voy a sumar");
    }

    //Método que retorna datos 
    public String mensaje(){
        String mensaje = "Voy a realizar una operacion";
        return mensaje;
    }

    //Método que retorna un numero
    public int prueba(){

        return 0;
    }

    //Operaciones
    public int sumar(int a, int b){
        
        return a+b;
    }

    public void sumar2(int a, int b){
        System.out.println("El resultado de la suma es: "+ (a + b));
    }
    //Restar
    public int restar(int a, int b){
        
        return a-b;
    }
    
    
    //Multiplicar
    public int multiplicar(int a, int b){
        return a*b;
    }
    
    //Dividir
    public double dividir(double a, double b){
        if(a != 0 || b !=0){

            return a/b;

        }else{
            return -1;
            
        }
        
    }

    
    

    

}

