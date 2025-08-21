let amigos = [];

function agregarAmigos (){
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();
  /*El usuario escribe el nombre, entonces input.value devuelve esa cadena tal cual, con los espacios incluidos. El método .trim() elimina los espacios en blanco al inicio y al final de la cadena.
  Así que el nombre queda ajustado. */

  if (nombre !== "") {
    amigos.push(nombre); // Guardar el nombre en el array
    mostrarLista();      // Actualizar la lista en el HTML
    input.value = "";    // Limpiar el campo de texto
  } else {
    alert("Por favor, escribe un nombre.");
  }
}

// Función para mostrar la lista en el HTML
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar la lista antes de actualizar

  amigos.forEach((amigo, index) => {
    let li = document.createElement("li");
    li.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(li);
  });
}


