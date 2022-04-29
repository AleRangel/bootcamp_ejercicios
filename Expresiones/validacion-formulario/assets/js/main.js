const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


const $formulario = document.querySelector("form");
/* console.log($formulario); */

const $input = document.querySelectorAll("input");
/* console.log($input); */


const $nombreError = document.querySelector("#error-Nombre");
const $apellidoError = document.querySelector("#error-Apellido");
const $emailError = document.querySelector("#error-email");
const $contrasenaError = document.querySelector("#error-Contrasena");
const $telefonoError = document.querySelector("#error-Telefono");


const statusInf = {
	nombre: false,
	apellido: false,
	email: false,
	contrasena: false,
	telefono: false,

}


$input.forEach((input) => {
	/* console.log(input.value);
 */
	input.addEventListener("keyup",(e)=>{
		/* console.log(e.target.name); */

		switch(e.target.name){
			case "nombre":	
				/* 
				console.log(e.target.value);
				console.log(input.value);
				console.log(expresiones.nombre.test(e.target.value));  
				*/ 
				
				if (!expresiones.nombre.test(input.value)) {
					$nombreError.textContent = "ERROR"
					statusInf.nombre = true;
					/* console.log(`Nombre correcto ${input.value}`); */
				}
				break;

			case "apellido":
				/* 
				console.log(e.target.value);
				console.log(input.value); 
				*/

				if (!expresiones.nombre.test(e.target.value)) {
					$apellidoError.textContent = "ERROR"
					statusInf.apellido = true;
					/* console.log(`Apellido correcto ${input.value}`); */
				}
				break;

			case "email":
				/* 
				console.log(e.target.value);
				console.log(input.value); aoe
				*/

				if (!expresiones.email.test(e.target.value)) {
					$emailError.textContent = "ERROR"
					statusInf.email = true;
					/* console.log(`email correcto ${input.value}`); */
				}
				break;

			case "password":
				/* 
				console.log(e.target.value);
				console.log(input.value); 
				*/
				if (!expresiones.password.test(e.target.value)) {
					$contrasenaError.textContent = "ERROR"
					statusInf.contrasena = true;
					/* console.log(`Password correcto ${input.value}`); */
				}
				break;

			case "telefono":
				/* 
				console.log(e.target.value);
				console.log(input.value); 
				*/
				if (!expresiones.telefono.test(e.target.value)){
					$telefonoError.textContent = "ERROR"
					statusInf.telefono = true;
					/* console.log(`Telefono correcto ${input.value}`); */
				}
				break;
			
			
		}
	})
})





$formulario.addEventListener("submit", (e)=>{
	e.preventDefault();




	const $check = document.querySelector("#terminos").checked;
	console.log($check);
	console.log(Object.values(statusInf).includes(false)); 
	if (!Object.values(statusInf).includes(false) && $check == true) {
		console.log("enviado");
		document.querySelector(".alert-danger").style.display = "none;"
	}
	else{
		console.log("No enviado");
		document.querySelector(".alert-danger").style.display = "block"
	}
} )
