import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Header(): JSX.Element {
    return (
        <div className="Header">
            <p className="my-name">tsuri's</p>
            <p className="portfolio-text">portfolio</p>
        </div>
    );
}
