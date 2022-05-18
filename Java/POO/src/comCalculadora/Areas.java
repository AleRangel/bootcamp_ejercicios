package src.comCalculadora;

public class Areas {
    public void mensaje(){
        System.out.println("Voy a calcular un area");
    }

    public int areaCuadrado(int L){
        return L*L;
    }

    public void areaTriangulo(int base, int altura){
        System.out.println((base * altura)/2);
    }

}
