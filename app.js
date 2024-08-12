function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiar(){
    document.querySelector('#num').value = '';
}

let intentos=1;
let may = 2;
let listaNumerosGenerados = [];
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*may)+1;
    //si ya estan sorteados todos los numeros
    if(listaNumerosGenerados.length == may){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
        //document.querySelector('button').setAttribute('disabled','true');
        //listaNumerosGenerados = [];
    }else{
        //si el numero esta en la lista
        if(listaNumerosGenerados.includes(numeroGenerado)){
            numeroGenerado = generarNumeroSecreto();
        }else{
            listaNumerosGenerados.push(numeroGenerado);
        }
        console.log(listaNumerosGenerados);
    }
    return numeroGenerado;
}


function inicio(){
    asignarTextoElemento('h1','Juego del numero Secreto');
    asignarTextoElemento('p',`Selecciona un numero del 1 al ${may}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    limpiar();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

inicio();

function verificarIntento(){
    let numeroIngresado = parseInt(document.getElementById('num').value);
    if(numeroIngresado === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${intentos === 1 ? 'Intento':'Intentos'}!!!`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
    }else{
        if(numeroIngresado < numeroSecreto){
            asignarTextoElemento('p','Es un numero mas grande');
        }else{
            asignarTextoElemento('p','Es un numero mas chico');
        }
        intentos++;
        limpiar();
    }
    return;
}