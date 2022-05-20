package Arreglos;
import java.util.Arrays;

public class Arreglos {
    public static void main(String[] args) {
        
    
    
            //Matrices / arreglos /arrays
            //Solo pueden tener un tipo de dato
            //debemos especificar su tamaño
            int[] arrNumeros = new int[5];

            arrNumeros [0] = 10;
            arrNumeros [1] = Integer.parseInt("20");
            arrNumeros [2] = 30;
            arrNumeros [3] = 40;
            arrNumeros [4] = 50;


            for (int i = 0; i < arrNumeros.length; i++) {
                System.out.println(arrNumeros[i]);
            }
            //forEach
            System.out.println("ForEach");
            int conteo = 0;
            for (int i : arrNumeros) {
                conteo ++;
                System.out.println("Elemento: " + conteo +" = "+ i);


                
            }

            //arreglo que guarda objetos
            Persona persona1 = new Persona("Ale",18);
            Persona persona2 = new Persona("Alejandro",29);
            
            
            Persona arrPersonas[] = new Persona[3];
            arrPersonas[0] = persona1;
            arrPersonas[1] = persona2;
            arrPersonas[2] = new Persona("Raul",27);

            System.out.println(Arrays.toString(arrPersonas));
            for (Persona persona : arrPersonas) {
                System.out.println(persona.nombre + " - " + persona.edad);
            }
            //Arreglos literales
            String[]arrStrings = {
                "Hola",
                "mi",
                "nombre",
                "es"

            };
            System.out.println(Arrays.toString(arrStrings));

        
    
    }
}
