const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	contra: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	usuario: true,
	contra: true,
}

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.contra && terminos.checked){
		formulario.reset();

		document.getElementById('formulario_mensaje_exito').classList.add('formulario_mensaje_exito_activo');
		setTimeout(() => {
			document.getElementById('formulario_mensaje_exito').classList.remove('formulario_mensaje_exito_activo')

		}, 5000);


	}
});