// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar nombre
let listaNombres = [];


//Funcion para agregar amigos
function agregarAmigo(){
    let nombreAgregado = document.getElementById('amigo').value;

    if (nombreAgregado === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaNombres.push(nombreAgregado);
    limpiarCaja();
    console.log(listaNombres);

    actualizarLista();
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiamos antes de volver a agregar

    listaNombres.forEach((nombre) => {
        let elemento = document.createElement("li");
        elemento.textContent = `${nombre}`;
        listaAmigos.appendChild(elemento);
    });
}

//Funcion para sortear los amigos
function sortearAmigo() {
    let resultadoLista = document.getElementById("resultado");
    let listaAmigos = document.getElementById("listaAmigos");
    
    // Limpiar resultados anteriores
    resultadoLista.innerHTML = "";

    if (listaNombres.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    let amigoSorteado = listaNombres[indiceAleatorio];

    // Mostrar el resultado del sorteo
    let resultado = document.createElement("li");
    resultado.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultado.classList.add("sorteo-resultado"); // Clase para estilos
    resultadoLista.appendChild(resultado);

    // Ocultar la lista de nombres después de sortear
    listaAmigos.innerHTML = "";
    listaNombres = []; // Vaciar el array
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

