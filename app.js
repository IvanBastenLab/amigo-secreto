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

  for (let nombres = 0; nombres < amigos.length; nombres++) {
  let li = document.createElement("li");
  li.textContent = `${nombres + 1}. ${amigos[nombres]}`;
  lista.appendChild(li);
  } /* li es un elemento  que se crea con document.createElement
    Se le asigna contenido con li.textContent
    Luego lista.appendChild(li) lo inserta como hijo dentro del elemento con id="listaAmigos"*/
    }

function sortearAmigo (){
   let amigoAleatorio = Math.floor(Math.random() * amigos.length);
   let nombreSorteado = amigos[amigoAleatorio];

   let resultado = document.getElementById("amigoSorteado");
   resultado.textContent = (`El amigo elegido es: ${nombreSorteado}`);

  }

mostrarLista();



