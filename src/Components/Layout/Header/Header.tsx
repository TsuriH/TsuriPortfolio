import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Header(): JSX.Element {
    return (
        <div className="Header">
			<p className="my-name">Tsuri <span>Heffer</span></p>
            <div className="contacts-options">

            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />

            </div>

        </div>
    );
}
