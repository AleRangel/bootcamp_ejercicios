import java.util.Scanner;

public class Calculadora {
    public static void main(String[] args){

        Scanner calculadora = new Scanner(System.in);

        System.out.println("Introduce el numero de la operacion a realizar");
		System.out.print("1) Suma   2) Resta   3) Multiplicacion   4) Division: ");
        int calcula = calculadora.nextInt();

        switch (calcula){
            case 1:
                System.out.println("Vas a suma");
                System.out.println("Ingresa el primer numero");
                int a = calculadora.nextInt();
                System.out.println("Ingresa el segundo numero");
                int b = calculadora.nextInt();
                int resultado = (a + b);
                System.out.println("Tu resultado es:");
                System.out.println(resultado);
                break;

            case 2:
                System.out.println("Vas a restar");
                System.out.println("Vas a suma");
                System.out.println("Ingresa el primer numero");
                int aR = calculadora.nextInt();
                System.out.println("Ingresa el segundo numero");
                int bR = calculadora.nextInt();
                int resultadoR = (aR - bR);
                System.out.println("Tu resultado es:");
                System.out.println(resultadoR);
                break;
                
            case 3:
                System.out.println("Vas a multiplicar");
                System.out.println("Vas a suma");
                System.out.println("Ingresa el primer numero");
                int aM = calculadora.nextInt();
                System.out.println("Ingresa el segundo numero");
                int bM = calculadora.nextInt();
                int resultadoM = (aM * bM);
                System.out.println("Tu resultado es:");
                System.out.println(resultadoM);
                break;
                
            case 4:
                System.out.println("Vas a dividir");
                System.out.println("Vas a suma");
                System.out.println("Ingresa el primer numero");
                int aD= calculadora.nextInt();
                System.out.println("Ingresa el segundo numero");
                int bD = calculadora.nextInt();
                if(bD == 0){
                    System.out.println("No puedes dividir entre cero");
                }
                float resultadoD = ((float)aD / (float)bD);
                System.out.println("Tu resultado es");
                System.out.print(resultadoD);
                
                break;
            default:
                System.out.println("Operación incorrecta");

        }




        
    }
}
