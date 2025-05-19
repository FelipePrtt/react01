import React, { useEffect } from 'react';

function Letreiro() {
  useEffect(() => {
    let i = 1;
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

    return () => clearInterval(intervalID); 
  }, []);

  return <h1 id="letreiro"></h1>;
}

export default Letreiro;