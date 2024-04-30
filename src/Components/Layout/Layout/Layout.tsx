import { useRef } from "react";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";

import "./Layout.css";

export function Layout(): JSX.Element {

    const projects = useRef(null)
    const about = useRef(null)
    const contact = useRef(null)

    const scrollToSection = (elementRef: any) => {

        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })

    }

    return (
        <div className="Layout">

            <header>
                <Header />
            </header>

            <main>
                <Hero scroll={scrollToSection}      projects={projects}
                    about={about}
                    contact={contact}
                />

                <div className="projects" style={{ height: "500px", background: "red" }} ref={projects}>projects</div>

                <div className="about" style={{ height: "500px", background: "blue" }} ref={about}>about</div>

                <div className="contact" style={{ height: "500px", background: "yellow" }} ref={contact}>yellow</div>

            </main>

            <footer>

            </footer>
        </div>
    );
}
