var botonEncriptar = document.getElementById('botonEncriptar');
var botonDesencriptar = document.getElementById('botonDesencriptar');
var botonDeCopiar = document.getElementById('botonCopiar')
var textoDeEntrada = document.getElementById('textoDeEntrada');
var textoDeSalida = document.getElementById('textoDeSalida');

    
    botonEncriptar.addEventListener('click',encriptar,true);
    botonDesencriptar.addEventListener('click',desencriptar,true);
    botonDeCopiar.addEventListener('click',copiarTexto,true);


function encriptar(){
    var textoAencriptar;
    textoDeEntrada.value=textoDeEntrada.value.toLowerCase();
    textoAencriptar=textoDeEntrada.value.split('');
    for(var i=0;i<textoAencriptar.length;i++){
        switch (textoAencriptar[i]) {
            case "a":
                textoAencriptar[i]="ai";
                break;
            case "e":
                textoAencriptar[i]="enter";
                break
            case "i":
                textoAencriptar[i]="imes";
                break;
            case "o":
                textoAencriptar[i]="ober";
                break;
            case "u":
                textoAencriptar[i]="ufat";
                break;
            default:
                textoAencriptar[i]=textoAencriptar[i];
                break;
            }
        }   
    textoAencriptar=textoAencriptar.toString();
    textoAencriptar=textoAencriptar.replaceAll(",","");
    textoDeSalida.value=textoAencriptar;
}



function desencriptar(){
    var textoEncriptado; 
    textoEncriptado=textoDeEntrada.value;
    textoEncriptado=textoEncriptado.replaceAll("ai","a");
    textoEncriptado=textoEncriptado.replaceAll("ober","o");
    textoEncriptado=textoEncriptado.replaceAll("enter","e");
    textoEncriptado=textoEncriptado.replaceAll("imes","i");
    textoEncriptado=textoEncriptado.replaceAll("ufat","u");
    textoDeSalida.value=textoEncriptado;
}



function copiarTexto(){
    if(textoDeSalida.value!=""){
        textoDeSalida.select();
        document.execCommand('copy');
        textoDeSalida.value="";
    }
    else{
        alert('NO HAY TEXTO QUE COPIAR');
    }
}