package com.excepciones;

public class Excepciones {
    public static void main(String[] args) {
        
        int num1 = 10 ;
        Integer num2 = null;

        float division;

        //try-catch-finally

        try{
            //código que vamos a probar
            division = num1 / num2;
            System.out.println(division);
        }catch(ArithmeticException ex /* Especificar la Excepción */){
            //Lo que va a realizar cuando se detecte una excepción
            division = 0.0f;
            System.out.println("No puedes dividir entre 0" + " Error: "+ex.getMessage());
        }catch(NullPointerException ex){
            division = 0.0f;
            System.out.println("Error: numero 2 es nulo");


        }
        
    }
}
