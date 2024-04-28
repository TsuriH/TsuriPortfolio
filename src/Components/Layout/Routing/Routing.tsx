import { Route, Routes } from "react-router-dom";
import "./Routing.css";
import Projects from "../../Projects/Projects/Projects";
import About from "../About/About";
import Contact from "../Contact/Contact";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="projects" element={<Projects />}/>

                <Route path="about" element={<About />}/>

                <Route path="contact" element={<Contact />}/>
            </Routes>
        </div>
    );
}

export default Routing;
