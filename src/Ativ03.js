import { Link } from "react-router-dom";
import Galeria from "./Semana3/Galeria";
import { Profile } from "./Semana3/Galeria";
import TodoList from "./Semana3/TodoList";
import ProfileAvatar from "./Semana3/Avatar";
export default function Ativ03() {
    return (
      <>
          <h2>Semana 3</h2>
          <h3>Gallery</h3>
          <h4>Chamada do Componente Filho</h4>
          <Profile />
          
          <h4>Chamada do Componente Pai</h4>
          <Galeria />

          <h4>Todo List</h4>
          <TodoList />
          <ProfileAvatar />
          <Link to={"/"}>Voltar</Link>
      </>
    );
  }