import java.util.Scanner;

public class Escanner {

    public static  void  main(String[] args){
        //Importante!!!!
        Scanner escaner = new Scanner(System.in);

        System.out.print("Ingresa numero:");
        long numero = escaner.nextInt();

        System.out.println("ingresa palabra");
        String palabra = escaner.next();
        System.out.println(numero);
        System.out.println(palabra);
    }
}
