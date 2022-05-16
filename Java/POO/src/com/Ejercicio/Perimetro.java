package com.Ejercicio;

public class Perimetro {

    public void perimetroTriangulo(int ld1, int ld2, int ld3){
         int resultadoPt =ld1 + ld2 + ld3;
         System.out.println("El perimetro del triangulo es: "+ resultadoPt);
    }
    public void perimetroCuadrado(int ld){
        int resultadoPcuadrado = ld * 4;
        System.out.println("El perimetre del cuadrado es: "+ resultadoPcuadrado);
    }
    public void perimetroCirculo(int r){
        float pi =  3.1416f;
        double resultadoPcirculo =  2*pi*r ;
        System.out.println("El perimetro del circulo es: " + resultadoPcirculo);
    }

    
}
