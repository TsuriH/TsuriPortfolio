import "./Hero.css";

export function Hero(): JSX.Element {
    return (
        <div className="Hero">
            <p>Hi, my name is </p>
            <h2 className="my-name">Tsuri Heffer</h2>
            <h3>I build things for the web.</h3>
            <p className="about-me">I'm a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Coming from the motion design field gives me a better understanding of design principles and a keen eye for aesthetics, which I blend with my technical skills on every project.</p>
            <button>My Projects</button>
        </div>
    );
}
