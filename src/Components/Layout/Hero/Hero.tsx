import "./Hero.css";

export function Hero(): JSX.Element {
    return (
        <div className="Hero">
            <h2>Hi!</h2>
            <p className="self-description">
                I'm A Full Stack <span>Web Developer</span></p>
            <p className="about">
            Coming from the motion design field gives me a better understanding of design principles and a keen eye for aesthetics, which I blend with my technical skills on every project
            </p>
        </div>
    );
}
