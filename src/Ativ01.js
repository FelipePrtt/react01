import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";


function Ativ01() {
  return (
    <>
        <h2>Semana 1</h2>
        <Letreiro />
        <h1><Relogio /></h1>
        <Link to={"/"}>Voltar</Link>
    </>
  );
}

export default Ativ01;
