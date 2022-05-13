import java.util.Scanner;

public class ejercicio1 {

        /*Crear una aplicación que reciba un int entre 1 y 10 y que regrese un mensaje según la calificación ingresada.


        menos de 3 == "Failed!"
        menos de 5 == "Insufficient!"
        menor de 9 == "Good!"
        10 == "Excellent!"

        Mayor de 10 == "Grade outside range supported!"*/
    public static void main(String[] args){

        int dato;

        dato = 10;

        if (dato <= 3){
            System.out.println("Failed!");
        }else{
            if (dato <= 5){
                System.out.println("Insufficient!");
            }else{
                if (dato <= 9) {
                    System.out.println("God");
                }else{
                    if (dato == 10){
                        System.out.println("Excellent!");
                    }else {
                        if (dato > 10) {
                            System.out.println("Grade outside range supported!");
                        }
                    }
                }

            }

        }

        Scanner dato2 = new Scanner(System.in);
        System.out.print("Ingresa calificacíon");
        int datos = dato2.nextInt();
        switch (datos){
            case 1,2,3:
                System.out.println("Failed!");
                break;
            case 4,5:
                System.out.println("insuficient!");
                break;
            case 6,7,8,9:
                System.out.println("god");
                break;
            case 10:
                System.out.println("Excellent!");
                break;
            default:
                System.out.println("Grade outside range supported!");
                break;
        }


    }
}
