package cliclos;

import javax.swing.JOptionPane;

public class cicloDoWhile {
    public static void main(String[] args){

        String clave = "Pedro";

        String comparacion= "";

        do {
            comparacion = JOptionPane.showInputDialog("Introduce la contraseña, por favor");

            if(clave.equals(comparacion)==false){
                System.out.println("La contrasena en incorrecta");
            }
        } while (clave.equals(comparacion) == false);
        System.out.println(clave.equals("La contrasena es correcta"));
    }
}
