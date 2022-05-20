package com.generetion.test;

import com.generecionmodel.Perro;

public class PruebaPerro {
    public static void main(String[] args) {
        

        Perro perro1 = new Perro("Pelusa","French","Pequeno","Blanco",2);

        System.out.println("");
        perro1.comer();    

        Perro perro2 = new Perro("Solovino", "Mestizo","Mediano","Cafe", 2);

        
        perro2.setHumano("Pedro");
        perro2.buscarHumano(2);   
    }
    
    
    
}
