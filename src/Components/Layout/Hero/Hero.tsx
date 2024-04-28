import "./Hero.css";
import { NavLink } from "react-router-dom";
export function Hero(): JSX.Element {
    return (
        <div className="Hero">
            <div className="hero-container">
                <h2>Hi, my name is Tsuri</h2>
                <p className="self-description">
                    I'm A Full Stack <br></br><span>Web Developer</span></p>
                <p className="about">
                    {/* Coming from the motion design field gives me a better understanding of design principles and a keen eye for aesthetics, which I blend with my technical skills on every project */}
                </p>
                <div className="nav-buttons">
                    <NavLink to="project" className="nav-btn">Project</NavLink>
                    <NavLink to="about" className="nav-btn">About</NavLink>
                    <NavLink to="contact" className="nav-btn">Contact</NavLink>
                </div>
            </div>

        </div>
    );
}
