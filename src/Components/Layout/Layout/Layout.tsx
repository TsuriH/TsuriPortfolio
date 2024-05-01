import { useRef } from "react";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";

import "./Layout.css";
import Projects from "../../Projects/Projects/Projects";

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

                <div className="projects" style={{ height: "100vh"}} ref={projects}><Projects /></div>

                <div className="about" style={{ height: "100vh", background: "blue" }} ref={about}>about</div>

                <div className="contact" style={{ height: "100vh", background: "yellow" }} ref={contact}>yellow</div>

            </main>

            <footer>

            </footer>
        </div>
    );
}
