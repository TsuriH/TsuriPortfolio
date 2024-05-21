import "./About.css";
function About(): JSX.Element {
    return (
        <div className="About">
            <h1>about me.</h1>
            <div className="about-me">

                <div className="skills">
                    <p>Full stack developer</p>
                    <p>Digital designer</p>
                    <p>Creative Thinker</p>
                </div>

                <div className="description-container">
                    <h2 className="welcome desc">Hello my name is <span>Tsuri.</span> </h2>
                    <p className="desc">Welcome to my portfolio.</p>
                    <p className="first-paragraph desc">I'm <span>Full Stack Web Developer </span> passionate about Front-End, particularly <span>React.</span></p>
                    <p className="second-paragraph desc">Having saying that I do <span>backend</span> too.</p>
                    <p className="third-paragraph desc">Since I can remember, I have always been drawn to visuals and graphics, especially interactive ones.</p>
                    <p className="forth-paragraph desc">I have a background in <span>motion design</span> and <span>graphic design</span>, in addition to expertise in <span>UX/UI</span>, client relations, and creativity.</p>
                </div>

            </div>




        </div>
    );
}

export default About;
