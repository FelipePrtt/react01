import { Link } from "react-router-dom";
import FormQuiz from "./Semana5/FormQuiz";
import FormTicket from "./Semana5/FormTicket";
import Accordion from "./Semana5/Accordion";
import Messenger from "./Semana5/Messenger";

export default function Ativ05() {
    return (
      <>
            <h2>Semana 5</h2>

            <h4>City Quiz</h4>
            <FormQuiz />

            <h4>FormTicket</h4>
            <FormTicket />

            <h4>According</h4>
            <Accordion />

            <h4>Contact list and Chat</h4>
            <Messenger />
          <Link to={"/"}>Voltar</Link>
      </>
    );
  }