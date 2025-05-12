import React from 'react';

function Relogio() {
  return <div id="relogio"></div>;
}

function atualizaRelogio() {
  const el = document.getElementById("relogio");
  if (el) {
    const agora = new Date();

    let horas = agora.getHours();
    let minutos = agora.getMinutes();
    let segundos = agora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    el.textContent = horaFormatada;
  }
}

setInterval(atualizaRelogio, 1000);

export default Relogio;
