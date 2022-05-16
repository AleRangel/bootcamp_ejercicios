package comCalculadora;

public class PruebaCalchculadora {
    public static void main(String[] args){//Uno por proyecto
        System.out.println("");

        //Instanciar de clase calculadora
        Calculadora calcular = new Calculadora();

        //Metodo queno retorna nada -void
        calcular.mensajeSumar();

        //Metodo que regresa un valor
        String mensaje = calcular.mensaje();
        System.out.println("");
        System.out.println(mensaje);

        int resultadoSuma =calcular.sumar(10, 10);
        System.out.println(resultadoSuma);

        calcular.sumar2(5,  2);


        int resultadoResta = calcular.restar(50, 25);
        System.out.println(resultadoResta);


        double resultadoDivicion = (double) calcular.dividir(5, 2 );
        System.out.println(resultadoDivicion);


        Areas areaGeometria = new Areas();

        areaGeometria.mensaje();

        int cuadradoArea = areaGeometria.areaCuadrado(4);
        System.out.println(cuadradoArea);

        areaGeometria.areaTriangulo(5, 10);

    }
}


