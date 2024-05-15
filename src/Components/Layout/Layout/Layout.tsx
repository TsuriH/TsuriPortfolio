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
   
            </main>

            <footer>

            </footer>
        </div>
    );
}
