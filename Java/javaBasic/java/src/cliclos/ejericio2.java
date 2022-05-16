package cliclos;

import java.util.Scanner;

/* Ejercicio

Validación de correo

Escribe un programa que reciba un correo y  que, usando un ciclo for, evalúe si el correo contiene un caracter de '@'.
Si lo tiene, el programa debe mostrar en consola:
"Es un correo válido"

Si no lo tiene, el programa debe mostrar:
"No es un correo válido"
 */

public class ejericio2 {

    public static void main(String[] args){

        
        
        Scanner dato = new Scanner(System.in);
        
        String correo ="";
        System.out.println("Cual es tu correo");
        correo = dato.next();

        

        for (int i = 0; i < correo.length(); i++) {
            
            String arroba = "@" ;    
            
            if (correo.charAt(i) != arroba.charAt(0)){
                continue;
            }else{
                System.out.println("Correo valido");
                break;
            }
            
            
        }
        
        
    }
    
}
