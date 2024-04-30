import "./Hero.css";
import { NavLink } from "react-router-dom";

interface HeroProps {
    scroll: Function;
    projects: any;
    about: any;
    contact: any;
}


export function Hero(props: HeroProps): JSX.Element {
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

                    <NavLink to="projects" className="nav-btn" onClick={() => props.scroll(props.projects)}>Projects</NavLink>

                    <NavLink to="about" className="nav-btn" onClick={() => props.scroll(props.about)}>About</NavLink>

                    <NavLink to="contact" className="nav-btn" onClick={() => props.scroll(props.contact)}>Contact</NavLink>
                </div>
            </div>

        </div>
    );
}
