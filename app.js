//Declaración del arreglo
let arrayAmigo = [];

function agregarAmigo() {
    // Obtiene el valor digitado por el usuario
    let nombre = document.getElementById("amigo").value;

    // Valida que el campo no esté vacio
    if (nombre.trim().length === 0) {
        alert("Ingrese un nombre para agregarlo");
    }
    // Si no, ingresa el nombre al arreglo
    else {
        arrayAmigo.push(nombre);
        document.querySelector("#amigo").value = "";
        listaAmigos();
    }
}

function listaAmigos() {
    let listaAmigos = document.querySelector("#listaAmigos");
    listaAmigos.innerHTML = "";

    //Recorre el arreglo para mostrar la lista de amigos
    for (let i = 0; i < arrayAmigo.length; i++) {
        const element = arrayAmigo[i];

        let lista = document.createElement("li");
        lista.textContent = element;
        listaAmigos.appendChild(lista);
    }
}

function sortearAmigo() {
    let cantidadAmigos = arrayAmigo.length;
    // Valida que hayan por lo menos dos nombres en el arreglo
    if (cantidadAmigos < 2) {
        alert("Ingrese por lo menos dos nombres para sortear");
    }
    // Si no, realiza el sorteo aleatorio entre los nombres registrados y muestra el nombre
    else {
        let i = Math.floor(Math.random() * cantidadAmigos);
        let sorteado = document.querySelector("#resultado");
        sorteado.innerHTML = arrayAmigo[i];
    }
}