import React from "react";
import {Link} from "react-router-dom";

const Home = () =>{
    return(
        <div>
            <title>Página Inicial</title>
            <nav>
                <ul>
                    <li>
                        <Link to={"/Ativ01"}>Semana 1</Link>
                    </li>

                    <li>
                        <Link to={"/Ativ02"}>Semana 2</Link>                        
                    </li>
                    <li>
                        <Link to={"/Ativ03"}>Semana 3</Link>
                    </li>
                    <li>
                        <Link to={"/Ativ04"}>Semana 4</Link>
                    </li>
                    <li>
                        <Link to={"/Ativ05"}>Semana 5</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;