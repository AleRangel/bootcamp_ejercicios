package pokemon;

public class Main {
    public static void main(String[] args) {
        
        Pokemon chikorita = new Pokemon(152, 1,  20, "Chikorita", false );
        
        System.out.println("<<<<<<<<<<<<<");
        chikorita.comer();
        chikorita.atacar();
        chikorita.dormir();
        

        TipoPlanta chikorita2 = new TipoPlanta(153, 1, 20, "Chikorita2", false, 5);

        System.out.println(">>>>>>>>>>>");
        chikorita2.envenenar();
        chikorita2.paralizar();
        System.out.println();
        chikorita2.comer();
        chikorita2.atacar();
        chikorita2.dormir();
    }
}
