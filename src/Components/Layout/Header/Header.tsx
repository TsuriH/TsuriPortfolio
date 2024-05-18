import "./Header.css";
import bottomWave from "../../../images/bottomwave.png"
import regularWave from "../../../images/regularwave.png"
import backgroundWaves from "../../../images/backgroundwaves.png"

export function Header(): JSX.Element {

    const wave1 = document.getElementById("wave1")
    const wave2 = document.getElementById("wave2")
    const wave3 = document.getElementById("wave3")
    window.addEventListener('scroll', () => {

        if (wave1 && wave2 && wave3) {
            const scrollValue = window.scrollY || window.pageYOffset;
            wave1.style.right = `${-20 + scrollValue}px`;
            wave2.style.right = `${10 + scrollValue}px`;
            wave3.style.right = `${20 + scrollValue}px`;
        }

    })



    return (
        <div className="Header">

            <p className="my-name">tsuri's</p>
            <p className="portfolio-text">portfolio</p>

            <div className="image-wave-container" id="wave1">
                <img src={regularWave} alt="" />
            </div>

            <div className="image-wave-container" id="wave2" >
                <img src={regularWave} alt="" />
            </div>


            <div className="image-wave-container bottom-wave" id="wave3">
                <img src={bottomWave} alt="" />
            </div>



        </div>
    );
}
