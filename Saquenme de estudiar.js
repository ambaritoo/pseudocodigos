// Este codigo ha sido generado por el modulo psexport 20180802-w32 de PSeInt.
// Es posible que el codigo generado no sea completamente correcto. Si encuentra
// errores por favor reportelos en el foro (http://pseint.sourceforge.net).

function numerosparimpar() {
	var nro;
	document.write("Ingresa un numero para saber si es par o impar",'<BR/>');
	nro = prompt();
	if ((nro%2)==0) {
		document.write("es par",'<BR/>');
	} else {
		document.write("es impar",'<BR/>');
	}
}

