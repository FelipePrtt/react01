import { Link } from "react-router-dom";
import Counter from "./Semana4/Counter.js";
import Toolbar from "./Semana4/ToolBar.js";
import Gallery from "./Semana4/Galeria.js";
import Form from "./Semana4/Form.js";
import MovingDot from "./Semana4/MovingDot.js";
import Form2 from "./Semana4/Form2.js"
import Form3 from "./Semana4/Form3.js";
import List from "./Semana4/List.js";
import List2 from "./Semana4/List2.js";
import ShapeEditor from "./Semana4/ShapeEditor.js";
import CounterList from "./Semana4/CounterList.js";
import List3 from "./Semana4/List3.js";
import List4 from "./Semana4/List4.js";
import BucketList from "./Semana4/BucketList.js";

export default function Ativ04() {
    return (
      <>
            <h2>Semana 4</h2>

            <h3>Toolbar</h3>
            <Toolbar />

            <h3>Galerry</h3>
            <Gallery />


            <h3>Counter</h3>
            <Counter />

            <h3>Form</h3>
            <Form />

            <h3>MovingDot</h3>
            <MovingDot />

            <h3>Form2</h3>
            <Form2 />

            <h3>Form3</h3>
            <Form3 />

            <h3>List</h3>
            <List />

            <h3>List2</h3>
            <List2 />

            <h3>ShapeEditor</h3>
            <ShapeEditor />

            <h3>CounterList</h3>
            <CounterList />

            <h3>List3</h3>
            <List3 />

            <h3>List4</h3>
            <List4 />

            <h3>BucketList</h3>
            <BucketList />
          <Link to={"/"}>Voltar</Link>
      </>
    );
  }