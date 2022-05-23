package Calculadora;

public class Calculadora {
    
    /* Atributos o propiedades */
    private int a;
    private int b;
    private int c;
    int resultado;
    
    public Calculadora (int a, int b){
        this.a = a;
        this.b = b;

    }

    public Calculadora(int a, int b, int c ){
        this.a = a;
        this.b = b;
        this.c = c;
    }




    //Metodo
    public void sumar(int a, int b){
        resultado = a + b;
        System.out.println("El resultado de la suma es : " + resultado);

    }

    public void sumar(int a,int b,int c){
        resultado = a + b + c;
        System.out.println("El resultado es : " + resultado);
    }



    /* getters y setters */
    public void setA(int a) {
        this.a = a;
    }
    public int getA() {
        return a;
    }
    public void setB(int b) {
        this.b = b;
    }
    public int getB() {
        return b;
    }

    public void setC(int c) {
        this.c = c;
    }
    public int getC() {
        return c;
    }



}
