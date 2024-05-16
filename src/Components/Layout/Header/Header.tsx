import "./Header.css";
import waveIMage from "../../../images/wave.png"


export function Header(): JSX.Element {
    return (
        <div className="Header">
            <p className="my-name">tsuri's</p>
            <p className="portfolio-text">portfolio</p>
            <div className="image-wave-container" >
                <img src={waveIMage} alt=""  className="wave-image"/>
            </div>
        </div>
    );
}
