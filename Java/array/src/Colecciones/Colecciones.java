package Colecciones;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class Colecciones {
    public static void main(String[] args) {
        
        System.out.println("\t  --- ArrayList");
        /* Colecciones
                List - ArrayList
        */
        //Clase principal
        List<String> miArray = new ArrayList<String>();

        miArray.add(0, "ale");
        miArray.add("Alex");
        miArray.add("xD");
        miArray.add(2,"borrado");

        System.out.println(miArray);//length para colecciones
        String borrado = miArray.remove(2);
        System.out.println(miArray.size());//length para colecciones
        System.out.println(miArray);//length para colecciones
        System.out.println(borrado);

        
        imprimir(miArray);


        /* Wrappers
            long ==> Long
            double ==> Double
            int ==> Integer 
            boolean ==> Boolean
        */

        int  num1 = 10;
        Integer num2 = 10;

        System.out.println(num1);
        System.out.println(num2);

        /* List<Integer> miArray2 = new ArrayList<Integer>(); */
        List<Object> miArray2 = new ArrayList<Object>();

        miArray2.add(10);
        miArray2.add(10);
        miArray2.add(30);
        miArray2.add(30);
        miArray2.add(30);
        imprimir(miArray2);



        System.out.println("");
        System.out.println("\t Set --- HashSet  ");

        Set<String> miSet = new HashSet<String>();
        //No acepta elementos duplicados
        //No los guarda en orden especifico
        //La colección que funciona más rápida
        
        miSet.add("Ale");
        miSet.add("Karen");
        miSet.add("Diana");
        
        miSet.add("Alex");
        miSet.add("Oliver");


        miSet.remove("Alex");

        System.out.println(miSet);

        imprimir(miSet);


         System.out.println(miSet.contains("Ale"));   



        /* Map -- HashMap -- Indice */


        System.out.println(""  );
        System.out.println("\t Map --- HashMap"  );
        //  <key, value>
        Map<String, Integer> miMap = new HashMap<String, Integer>();
        //Para agregar valores al HashMap
        //No permite agregar valores duplicados 
        miMap.put("Valor-1 ", 2);
        miMap.put("Valor-2 ", 4);
        miMap.put("Valor-3 ", 5);
        miMap.put("Valor-4 ", 6);
        
        //Muestra los valores de HashMap y los convierte en colecciones
        System.out.println(miMap.values()); 
        //Muestra las llaves 
        System.out.println(miMap.keySet());

        System.out.println(miMap.get("Valor-1 "));

        for (String llave : miMap.keySet()) {

            System.out.println(llave + " : " + miMap.get(llave) );
            
        }
        
        
        








    }

    public static void imprimir(Collection coleccion) {
        for (Object elemento : coleccion) {
            System.out.println("Elemento = " + elemento);
        }

        
    }

    

}
