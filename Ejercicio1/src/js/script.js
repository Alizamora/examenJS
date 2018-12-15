/**
 * Ejercicio #1
 * 
 */


//request
function getJson() {
    let request = new XMLHttpRequest();
    request.addEventListener('load', dataNumber);
    request.responseType = 'json';
    request.open('GET', '../numeros.json');
    request.send();
}

function dataNumber(event) {
    const data = event.target.response;
    creoLista(data);
}

function calcularPromedio(data){

    let sumaTotal = 0;
    for(let i of data.numeros) {
    sumaTotal = sumaTotal + i;
    }
    return sumaTotal / data.numeros.length;

}

function creoLista(data) {

    let resultadoPromedio = calcularPromedio(data);

    const lista = document.getElementById('lista');
    let cantidadDeNumeros = document.createElement('li');
    cantidadDeNumeros.innerHTML = 'Cantidad de números: ' + data.numeros.length;

    let promedio = document.createElement('li');
    promedio.innerHTML = 'Promedio:  ' + resultadoPromedio;

    let numeroMayor = document.createElement('li');
    numeroMayor.innerHTML = 'Número mayor; ';

    let numeroMenor = document.createElement('li');
    numeroMenor.innerHTML = 'Número menor: ';

    lista.appendChild(cantidadDeNumeros);
    lista.appendChild(promedio);
    lista.appendChild(numeroMayor);
    lista.appendChild(numeroMenor);

}

getJson();

