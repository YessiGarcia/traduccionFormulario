function translate (){
	var title= document.getElementById ("form-signin-heading");
	var imail= document.getElementById ("inputEmail");
	var password= document.getElementById("inputPassword");
	var remember= document.getElementsByTagName("span")[0];
	var button= document.getElementsByClassName("btn")[0];

	title.innerHTML= "Por favor inicia sesión";
	imail.placeholder= "Correo electrónico";
	password.placeholder= "Contraseña";
	remember.innerHTML= "Recordar datos";
	button.innerHTML= "Iniciar sesión"; 
}
translate();

function mostrar(){
	var imail= document.getElementById ("inputEmail").value;
	var password= document.getElementById("inputPassword").value;

	document.getElementById("datos").innerHTML = "Tus datos son: <br>";
	document.getElementById("resultados").innerHTML= "El correo que ingresaste es: <br>" + imail +
	"<br>La clave ingresada es: <br>" + password;
}
 