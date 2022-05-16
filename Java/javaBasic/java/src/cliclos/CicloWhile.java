package cliclos;

import javax.swing.JOptionPane;

public class CicloWhile {
    public static void main(String[] args){

        //While

        /* int condicion = 0;

        while(condicion < 5){
            System.out.println("Hola");
            condicion++;

        } */

        //Verificar contraseña 

        String clave = "Pedro";

        String comparacion= "";

        while(clave.equals(comparacion) == false ){
            comparacion = JOptionPane.showInputDialog("Introduce la contraseña, por favor");

            if(clave.equals(comparacion)==false){
                System.out.println("La contraseña en incorrecta");
            }
        }
        System.out.println(clave.equals("La contraseña es correcta"));


    }
    
}
