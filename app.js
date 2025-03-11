// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadeAmigos = [];


function agregarAmigo(){
    let amigoIngresado = document.getElementById('amigo').value;
    if (amigoIngresado == '') {
        alert('Por favor, ingrese un nombre válido');
    }else {
        listadeAmigos.push(amigoIngresado);
        limpiarCaja();
        asignarListaElemento('listaAmigos', listadeAmigos);
        console.log(listaAmigos);
    }    
}

function sortearAmigo(){
    let amigoSorteado = listadeAmigos[Math.floor(Math.random() * listadeAmigos.length)];

    asignarTextoElemento('resultado', `El amigo sorteado es ${amigoSorteado}`)
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}


function asignarTextoElemento(id,texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto;
}

function asignarListaElemento(id, lista) {
    let elementoHTML = document.getElementById(id);
    let htmlLista = "<ul>";
    
    lista.forEach(item => {
        htmlLista += `<li>${item}</li>`;
    });

    htmlLista += "</ul>";
    elementoHTML.innerHTML = htmlLista;
}


