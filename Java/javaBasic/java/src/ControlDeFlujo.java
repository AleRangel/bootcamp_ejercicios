import java.util.Scanner;

public class ControlDeFlujo {
    public static void main(String[] args){

        Scanner edad = new Scanner(System.in);
        System.out.print("Cual es tu edad?: ");
        
        int edadDato = edad.nextInt();
       
        if( edadDato >= 18){
            if ( edadDato > 30){
                System.out.println("Eres un adulto mayor");
            }
            else{

                System.out.println("Eres mayor de edad");
            }
        }else{
            System.out.println("Eres menor de edad");
        }

        System.out.println("Operador Ternario");
        String mensaje = (edadDato > 18) ? ("Eres mayor de edad"): ("Eres menor de edad");
        System.out.println(mensaje);

        
        Scanner dia = new Scanner(System.in) ;
        System.out.print("Que dia es hoy: ");
        String dias = dia.next();

        switch(dias.toLowerCase()){
        case "lunes":
            System.out.println("5 minutos mas");
            break;
        case "martes":
            System.out.println("No te cases ni te embarques");
            break;
        case "jueves":
                System.out.println("Viernes chiquito");
            break;
        case "vienes":
                System.out.println("Chelas");
            break;
        default:
            System.out.println("Dia no valido");
            break;
            
        }



    }

}
