const {average} = require("../para_probar");

//Englobar varios test que va a testear el método de "average"
describe("average",()=>{

  /* test("ingresa un solo valor", ()=> {

      //guardamos el resultado de la variable 
      const resultado = average([1])
      //?"esperando" 'a'    y debería ser "esto" 
      expect(resultado).toBe(1)

  })   */
  test("ingresar un solo valor", () =>{
      expect(average([1])).toBe(1);
  })
  test("usando múltiples valores", () =>{
      expect(average([1,2,3,4,5,6])).toBe(3.5);
  })
  //Crear un test para probar un valor undefine
  test("usando undefined", () =>{
      expect(average()).toBeUndefined();
  })
  test("cunado ingresamos un arreglo vació", () =>{
      expect(average([])).toBeNaN();
  })
  
});