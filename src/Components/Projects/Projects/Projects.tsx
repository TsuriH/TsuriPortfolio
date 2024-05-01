import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { url } from "inspector";
import { Header } from "../../Layout/Header/Header";

function Projects(): JSX.Element {
    return (
        <div className="Projects">
            <div className="skill-icons-container"></div>

            <div className="content-container">
                <h2>Projects</h2>
                <p className="project-description">
                    "Design is not just what it looks like and feels like. Design is how it works." <br></br> Steve Jobs</p>
                <div className="projects-wrapper">

                    <div className="project-container" style={{ backgroundImage: 'url("https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?cs=srgb&dl=pexels-padrinan-255379.jpg&fm=jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}><a href="#" className="live-project">Live Project <FontAwesomeIcon icon={faArrowRight} /></a> </div>

                    <div className="project-container" style={{ backgroundImage: 'url("https://www.interviewbit.com/blog/wp-content/uploads/2022/01/Web-Development-Projects-1-2048x1001.png")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}><a href="#" className="live-project">Live Project <FontAwesomeIcon icon={faArrowRight} /></a> </div>

                    <div className="project-container" style={{ backgroundImage: 'url("https://cache.careers360.mobi/media/article_images/2022/4/28/10-Interesting-Web-Development-Project-Ideas-For-Beginners.webp")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}><a href="#" className="live-project">Live Project <FontAwesomeIcon icon={faArrowRight} /></a> </div>

                    <div className="project-container" style={{ backgroundImage: 'url("https://htmlburger.com/blog/wp-content/uploads/2022/01/free-design-proposal-templates-826x464.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}><a href="#" className="live-project">Live Project <FontAwesomeIcon icon={faArrowRight} /></a> </div>

                </div>
            </div>



        </div>
    );
}

export default Projects;
