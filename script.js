/*
  La proprietà classList è un oggetto che permette di aggiungere, rimuovere e gestire le classi CSS di un elemento HTML in modo dinamico.
*/
// IIFE con funzione 
(function()
{
  const newDiv = document.createElement("div");
  newDiv.textContent = "CHANGE DIV COLOR";
  newDiv.id = "main_div";
  newDiv.classList.add("div-style");

  document.body.appendChild(newDiv);
}());

// Stessa IIFE ma con funzione anonima
// Creazione del contenitore per pulsante e color picker
(() => {
  const controlsDiv = document.createElement("div");
  controlsDiv.id = "controls";

  document.body.appendChild(controlsDiv);
})();

(() =>
{
  const button = document.createElement("button");
  button.id = "bt";
  button.textContent = "click me";
  button.classList.add("button-style");

  document.getElementById("controls").appendChild(button);
})();

var col_item;
(() => 
  {
    col_item = document.createElement("input");
    col_item.type = "color";
    col_item.id = "colIte";
    
    document.getElementById("controls").appendChild(col_item);
  })();
  
// Aggiungi un evento di click al pulsante
const div = document.getElementById("main_div");
const button = document.getElementById("bt");
button.addEventListener('click', function() {
  // Modifica le proprietà del div al click del pulsante
  let back_coolor = col_item.value;
  div.style.backgroundColor = back_coolor; // Cambia il colore di sfondo
  div.style.color = 'white'; // Cambia il colore del testo
});
