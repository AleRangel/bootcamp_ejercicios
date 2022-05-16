package com.Ejercicio;

public class CalculadoraGeometrica {
    public static void main(String[] args){


        Perimetro calculadoraPerimetro  = new Perimetro();

        calculadoraPerimetro.perimetroTriangulo(2, 3, 4);

        calculadoraPerimetro.perimetroCuadrado(5);

        calculadoraPerimetro.perimetroCirculo(5);

        Areas calculadoraArea = new Areas();

        calculadoraArea.areaTriangulo(10,5);

        calculadoraArea.areaCuadrado(5);

        calculadoraArea.areaCirculo(4);


    }
}
