package src.api;

import java.util.Scanner;

public class PruebaApi {
    public static void main(String[] args){
        String nombre = "Alejandro";
        System.out.println(nombre);

        String apellido = new String("Andrade");
        System.out.println(apellido);

        System.out.println(nombre.charAt(0));

        //?Escáner
        Scanner sc = new Scanner(System.in);
        sc.nextInt();
        sc.close();

        //?Math

        Math.random ();

    }
    
}
