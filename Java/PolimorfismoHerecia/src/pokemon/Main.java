package pokemon;

public class Main {
    public static void main(String[] args) {
        
        /* Pokemon chikorita = new Pokemon(152, 1,  20, "Chikorita", false );
        
        System.out.println("<<<<<<<<<<<<<");
        chikorita.comer();
        chikorita.atacar();
        chikorita.dormir(); */
        

        TipoPlanta chikorita2 = new TipoPlanta(153, 1, 20, "Chikorita2", false, 5);

        System.out.println(">>>>>>>>>>>");
        chikorita2.envenenar();
        chikorita2.paralizar();
        System.out.println();
        chikorita2.comer();
        chikorita2.atacar();
        chikorita2.dormir();


        //Instanciar 
        Chikorita chikorita4 = new Chikorita(123,1,20,"Chikorita4",false,1,8);
        System.out.println(">>>>>>>>>>>");
        chikorita4.dormir();
        chikorita4.envenenar();
        chikorita4.paralizar();
        chikorita4.latigo();
        
        chikorita4.getNumeroCuernitos();
        
        chikorita4.comer();
        chikorita4.comer(" baya azul");
        chikorita4.comer(" bayas azules " ,8);
        chikorita4.atacar();
        
        System.out.println("-----Interfaces------");
        Charmander charmader = new Charmander(5,1,3,"charmader",false);

        charmader.comer();
        charmader.atacar();
        charmader.comer(" baya azul");
        charmader.comer(" bayas azules " ,8);
        charmader.lanzaLlamas();
        charmader.araniar();
        charmader.volar();
    }
}
