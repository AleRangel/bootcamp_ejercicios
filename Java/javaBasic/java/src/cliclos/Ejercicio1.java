package cliclos;

import java.util.Random;
import java.util.Scanner;

import javax.swing.JOptionPane;

public class Ejercicio1 {
    
    public static void main(String[] args){
        Random rd = new Random();
        int numeroAleatorio = rd.nextInt(11);

        Scanner escaner = new Scanner(System.in);
        
        int numero = 0;

        do {
            System.out.println("Adivina el numero");

            System.out.println("Ingresa un numero: ");
            numero = escaner.nextInt();

            
        } while (numero != numeroAleatorio);
        System.out.println("Correcto");
    }
}
