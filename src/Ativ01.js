import { Link } from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";

let i = 0;

function Ativ01() {
  return (
    <>
        <h2>Semana 1</h2>
        <Letreiro index = {i}/>
        <Relogio />
        <Link to={"/"}>Voltar</Link>
    </>
  );
}

export default Ativ01;
