package com.Ejercicio;

public class Areas {

    public void areaTriangulo(int base, int altura){
        double resultadoAreaT = (base * altura)/2;
        System.out.println("El area de triangulo es: "+ resultadoAreaT);
    }
    public void areaCuadrado(int L){
        double resultadoAreaCuadrado = (L *L);
        System.out.println("El area de cuadrado es: "+ resultadoAreaCuadrado);
    }
    public void areaCirculo(int r){
        float pi =  3.1416f;
        double radio2 = Math.pow(r, 2 );
        double resultadoAreaC = (pi)*radio2 ;
        
        System.out.println("El area de circulo es: "+ resultadoAreaC);
    }

    
}
