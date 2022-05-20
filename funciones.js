
let x= $(document);
x.ready(inicializarEventos);

function inicializarEventos(){
	let x= $("#boton1");
	x.click(extraerTexto);
	x= $("#boton2");
	x.click(modificarTexto);
	x=$("#boton3");
	x.click(modificarDatosTabla);
}

function extraerTexto(){
	let x=$("#parrafo");
	alert(x.text());
}

function modificarTexto(){
	let x=$("#parrafo2");
	x.text("Hola Mundo");
}

function modificarDatosTabla(){
	let x=$("td");
	x.text("Dato Modificado");
}
