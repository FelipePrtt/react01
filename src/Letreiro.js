import React from 'react';


let intervalID;
let resp;
function Letreiro({index}) {
  const textoCompleto = 'Venha estudar na FATEC!';
  
  if (index < textoCompleto.length){
    resp = textoCompleto.slice(0, index);
    return(<h1>{resp}</h1>)
  }else{
    clearInterval(intervalID);
    return(<h1>{texto}</h1>)
  }

  
}

export default Letreiro;
