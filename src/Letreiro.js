import React from 'react';

let index = 0;
const textoCompleto = 'Venha estudar na FATEC!';
let intervalID;

function Letreiro() {
  const [texto, setTexto] = React.useState(''); // Usando useState para armazenar o texto

  React.useEffect(() => {
    intervalID = setInterval(() => {
      setTexto(textoCompleto.slice(0, index));  // Atualiza o texto com a parte cortada
      index++;
      if (index >= textoCompleto.length) {
        clearInterval(intervalID); // Para quando terminar
      }
    }, 100);

    // Cleanup: para o intervalo quando o componente for desmontado
    return () => clearInterval(intervalID);
  }, []); // O array vazio significa que o efeito só roda uma vez, quando o componente montar

  return <h1>{texto}</h1>;
}

export default Letreiro;
