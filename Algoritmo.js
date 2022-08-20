document.getElementById("div-aparece").style.display = 'none';
inputverificar();
function saltarLinea ()
{
    document.write("<br>");
}
function imprimir (mensaje)
{
    texto.value = mensaje;
}

function limpiarFrases ()
{
    fraseCodificada = "";
    fraseDecodificada = "";
}
// instanciamos los objetos que utilizamos en html para poder recopilar la informacion en jss
var texto = document.querySelector("#mensaje");
var input = document.querySelector("#textBox");
var fraseCodificada = "";
var fraseDecodificada = "";
texto.focus();

function codigoEncriptado (letra)
{
var letraCodificada = letra;
if (letra == 'a')
{
    letraCodificada = "ai";
}
if (letra == 'e')
{
    letraCodificada = "enter";
}
if (letra == 'i')
{
    letraCodificada = "imes";
}
if (letra == 'o')
{
    letraCodificada = "ober";
}
if (letra == 'u')
{
    letraCodificada = "ufat";
}
return letraCodificada;
}

document.getElementById('botonEncriptar').onclick = (e) => {
    e.preventDefault();
    for (var i = 0; i < input.value.length; i++)
        {
            fraseCodificada += codigoEncriptado(input.value[i]);
        }
    mensaje.value = fraseCodificada;
    input.value = "";
    aparece()
    limpiarFrases();
}

document.getElementById('botonDesencriptar').onclick = (e) => {
    e.preventDefault();
    fraseDecodificada = input.value.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    mensaje.value = fraseDecodificada;
    input.value = "";
    aparece();
    limpiarFrases();
}

document.getElementById('btn-copiar').onclick = (e) => {
    e.preventDefault();
    const mensaje = document.querySelector("#mensaje");
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
}

function aparece() {
    document.getElementById("div-desaparece").style.display = 'none';
    document.getElementById("div-aparece").style.display = 'block';
}

function inputverificar() {
    var inputPalabra = document.querySelector("#textBox");
    inputPalabra.addEventListener("keypress", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
    e.preventDefault();
}
});
}

function home() {
    document.getElementById("div-aparece").style.display = 'none';
    document.getElementById("div-desaparece").style.display = 'block';
}