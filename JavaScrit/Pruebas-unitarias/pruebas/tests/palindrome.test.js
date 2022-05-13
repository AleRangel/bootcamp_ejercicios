//importar là función

const { palindrome } = require("../para_probar");
//? Primer test unitario
    //descripción de la función a testear 1
test("palindrome de generation", () =>{

    //guardamos la función en una variable 2
    const resultado = palindrome ("generation");


//?"esperando" 'a'    y debería ser "esto" 3
    expect(resultado).toBe('noitareneg'); 
});





//! test2
    //descripción de la función a testear 1
test("palindrome usando un string vació", () =>{

    //guardamos la función en una variable 2
    const resultado = palindrome ("");


//?"esperando" 'a'    y debería ser "esto" 3
    expect(resultado).toBe(''); 
});


//! test3 

    //descripción de la función a testear 1
test("palindrome usando un undefined", () =>{

    //guardamos la función en una variable 2
    const resultado = palindrome();


//?"esperando" 'a'    y debería ser "esto" 3
    expect(resultado).toBe(undefined); 
});

