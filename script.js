const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function encriptar(stringEncriptada) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    matrizCodigo.forEach(([original, reemplazo]) => {
        if (stringEncriptada.includes(original)) {
            stringEncriptada = stringEncriptada.replaceAll(original, reemplazo);
        }
    });

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    matrizCodigo.forEach(([original, reemplazo]) => {
        if (stringDesencriptada.includes(reemplazo)) {
            stringDesencriptada = stringDesencriptada.replaceAll(reemplazo, original);
        }
    });

    return stringDesencriptada;
}

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function copiarTexto() {
    navigator.clipboard.writeText(mensaje.value)
        .then(() => {
            alert("Texto copiado");
        })
        .catch(err => {
            console.error("Error al copiar el texto: ", err);
        });
}
