import React from 'react';

function Letreiro() {
  return <h1 id="letreiro"></h1>;
}

let i = 0;
const textoCompleto = 'Venha estudar na FATEC!';

function tick() {
  const elemento = document.getElementById('letreiro');
  if (elemento && i <= textoCompleto.length) {
    elemento.textContent = textoCompleto.slice(0, i);
    i++;
  } else {
    clearInterval(intervalID);
  }
}

const intervalID = setInterval(tick, 500);

export default Letreiro;
