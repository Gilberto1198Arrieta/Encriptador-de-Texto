var global;

function encriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
var txtCifrado = texto.replace(/e/igm,"enter");
var txtCifrado = txtCifrado.replace(/o/igm,"ober");
var txtCifrado = txtCifrado.replace(/i/igm,"imes");
var txtCifrado = txtCifrado.replace(/a/igm,"ai");
var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

document.getElementById("imgDer");
document.getElementById("texto");
document.getElementById("texto2").innerHTML = txtCifrado;
document.getElementById("copiar");
document.getElementById("copiar");
}

function desencriptar(){
    var texto = document.getElementById("inputTexto").value.toLowerCase();
    
var txtCifrado = texto.replace(/enter/igm,"e");
var txtCifrado = txtCifrado.replace(/ober/igm,"o");
var txtCifrado = txtCifrado.replace(/imes/igm,"i");
var txtCifrado = txtCifrado.replace(/ai/igm,"a");
var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

document.getElementById("imgDer");
document.getElementById("texto");
document.getElementById("texto2").innerHTML = txtCifrado;
document.getElementById("copiar");
document.getElementById("copiar");


}

function copiar(){
    var contenido = document.getElementById("texto2");
    global = contenido.value
    console.log(global);

}

function pegar(){
    var inputTexto = document.getElementById("inputTexto");
    inputTexto.value = global
    console.log(inputTexto.value);

}
