public class OperadoresAritmeticos {
    public static void main(String[] args){
        //súma
        float suma = 200 + 5.5f; // cuando trabajemo con numero de . flotante especificar con una f al final
        //resta
        int resta = 200 - 50;
        //Multiplicacíon
        int multiplicacion = 5 * 5;
        //division
        float division = 10/3f;

        System.out.println(suma);
        System.out.println(resta);
        System.out.println(multiplicacion);
        System.out.println(division);

        // Modulo
        int modulo = 3%2; // 1 es igual a sin residuo

        int numero = 10;
        //numero++;
        //numero--;

        //numero = numero + 2;
        numero += 2;

        //numero = numero - 10;
        numero -=10;

        //numero = numero *5
        numero *= 10;

        System.out.println(modulo);
        System.out.println(numero);
    }
}
