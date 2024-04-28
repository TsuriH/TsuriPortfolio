import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">

            <header>
                <Header />
            </header>

            <main>
                <Hero />
            </main>

            <footer>

            </footer>
        </div>
    );
}
