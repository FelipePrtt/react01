import React from 'react';


let intervalID;
let resp;
let i = 0;
function Letreiro({index}) {
  const textoCompleto = 'Venha estudar na FATEC!';
  
  if (index < textoCompleto.length){
    resp = textoCompleto.slice(0, index);
    return(<h1>{resp}</h1>)
  }else{
    console.log("Todas as letras já foram exibidas!");
    clearInterval(intervalID);
    return(<h1>{resp}</h1>)
  }

}

function tick(){
  console.log(i);
  console.log({resp})
  return ++i;
}

intervalID = setInterval(tick, 500);
export default Letreiro;
