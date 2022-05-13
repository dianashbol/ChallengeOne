const inputTexto = document.querySelector(".input-texto") 
const mensagem = document.querySelector(".mensagem")

function btnEncriptar () {
	const textoEncriptado = encriptar(inputTexto.value)
	mensagem.value = textoEncriptado;
}

function btnDesencriptar () {
	const textoDesencriptado = desencriptar(mensagem.value)
	inputTexto.value = textoDesencriptado;
}

function encriptar (stringEncriptada) {
	let matrizCodigo = [["e","enter"],["i","imes"],["a", "ai"],["o","ober"],["u","ufat"]]
	stringEncriptada = stringEncriptada.toLowerCase();

	for (let i=0; i < matrizCodigo.length; i++) {
		if(stringEncriptada.includes(matrizCodigo[i][0])) {
		stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
		}
	}
	return stringEncriptada;
}

function desencriptar (stringDesencriptada) {
	let matrizCodigo2 = [["ai", "a"],["enter","e"],["imes","i"],["ober","o"],["ufat","u"]]
	stringDesencriptada = stringDesencriptada.toLowerCase();

	for (let i=0; i < matrizCodigo2.length; i++) {
		if(stringDesencriptada.includes(matrizCodigo2[i][0])) {
		stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo2[i][0], matrizCodigo2[i][1])
		}
	}
	return stringDesencriptada;
}