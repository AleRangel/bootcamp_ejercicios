package cliclos;

public class CicloFor {
    public static void main(String[] args){

        /* for (int i = 0; i <= 50; i++) {
            
            System.out.println("Hola " + i);

        }
        
        for (int i = 5; i > 0 ; i--) {

            System.out.println("Hola 2 " + i);
            
        } */
        
        for (int i = 0; i < 10; i++) {
            if(i%2 == 0){
                continue;
            }
            System.out.println(i);
        }

    }
    
}
