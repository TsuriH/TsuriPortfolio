import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import land from "../../../images/land.png"
import seaweed from "../../../images/seaweed.png"
import whiteSeaweed from "../../../images/whiteSeaweed.png"

function Contact(): JSX.Element {
    return (
        <div className="Contact">

            <div className="seaweed-image-container">
                <img src={seaweed} alt="" />
            </div>

            <div className="whiteSeaweed-image-container">
                <img src={whiteSeaweed} alt="" />
            </div>

            <div className="land-image-container">
                <img src={land} alt="" />
            </div>





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
