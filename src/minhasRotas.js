import { BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./Home";
import Ativ01 from "./Ativ01"
import Ativ02 from "./Ativ02"
import Ativ03 from "./Ativ03";


export default function MinhasRotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="Ativ01" element={<Ativ01 />}/>
                <Route path="Ativ02" element={<Ativ02 />} />
                <Route path="Ativ03" element={<Ativ03 />} />
            </Routes>
        </BrowserRouter>
    );
}