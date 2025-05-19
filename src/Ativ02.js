import { Link } from "react-router-dom";
import ContadorPessoa from "./Semana2/ContadorPessoas";

function Ativ02() {
    return (
      <>
          <h2>Semana 2</h2>
          <ContadorPessoa />
          <Link to={"/"}>Voltar</Link>
      </>
    );
  }
  
  export default Ativ02
  