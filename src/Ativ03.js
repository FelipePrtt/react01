import { Link } from "react-router-dom";
import Galeria from "./Semana3/Galeria";
import { Profile } from "./Semana3/Galeria";
import TodoList from "./Semana3/TodoList";
import ProfileCards from "./Semana3/ProfileCards";
import PackingList from "./Semana3/PackingList";
import List from "./Semana3/List";
import AppReceita from "./Semana3/AppReceita";
import TeaSet from "./Semana3/TeaSet";

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
          <ProfileCards />       

          <h4>Packed List</h4>
          <PackingList />

          <h4>List</h4>
          <List />

          <h4>Receitas</h4>
          <AppReceita />

          <TeaSet />
          
          <Link to={"/"}>Voltar</Link>
      </>
    );
  }