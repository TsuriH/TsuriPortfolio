import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Contact(): JSX.Element {
    return (
        <div className="Contact">
            <h1>contact.</h1>

            <div className="contact-options-container">

                <div className="contact-icons-container">
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <FontAwesomeIcon icon={faGithub} />
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>

                <div className="raw-contact">

                    <div>
                        <p>Phone Number :</p> <p className="phone-number"></p> 0555577521
                    </div>

                    <div>
                        <p>Gmail :</p> <p className="gmail">tsuri.he@gmail.com</p>
                        <div />

                    </div>
                    
                </div>
            </div>

        </div>
    );
}

export default Contact;
