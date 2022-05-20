package com.generecionmodel;

import java.util.HashMap;
import java.util.Map;

public class Perro {
    //Atributos
    private String nombre;
    private String raza;
    private String tamanio;
    private String color;
    int edad;

    private int id;
    private static int contador = 0;

    private static Map<Integer, String> humano = new HashMap<Integer, String>();
    

    //constructor
    
    public Perro (String nombre, String raza, String tamanio, String color, int edad){

        this.nombre = nombre;
        this.raza = raza;
        this.tamanio = tamanio;
        this.color = color;
        this.edad = edad;
        this.id = ++Perro.contador;
        

        


    }
    //getters setters
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getNombre() {
        return nombre;
    }
    
    public void setRaza(String raza) {
        this.raza = raza;
    }

    public String getRaza() {
        return raza;
    }

    public void setTamanio(String tamanio) {
        this.tamanio = tamanio;
    }
    
    public String getTamanio() {
        return tamanio;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getColor() {
        return color;
    }

    public void setEdad(int edad) {
        this.edad = edad;
    }

    public int getEdad() {
        return edad;
    }

    public static void setContador(int contador) {
        Perro.contador = contador;
    }

    public static int getContador() {
        return contador;
    }

    
    public void setHumano(String value) {
		Perro.humano.put(this.id, value);
	}

    public static String buscarHumano(Integer key) {
		return "El nombre de este humano es: " + humano.get(key);
	}

    public void comer(){
        System.out.println(this.nombre  + " esta comiendo");
    }
    
    public void dormir(){
        System.out.println(this.nombre  + " esta durmiendo");

    }
    public void correr(){
        System.out.println(this.nombre  + " esta corriendo");

    }
   

    
}
