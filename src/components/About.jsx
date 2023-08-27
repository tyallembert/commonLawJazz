import "../styles/about.scss";
import Selfie from "../images/rich_1.png";

const About = () => {
    return (
        <div className="aboutContainer">
            <img src={Selfie} alt="rich selfie" className="richSelfie"/>
            <div className="aboutTextContainer">
                <h1 className="aboutHeader">Rich Sikorski</h1>
                <p className="aboutText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus quis, modi nobis blanditiis velit! Molestias nulla fugit modi vel maxime eum illum provident quod. Eum perferendis aspernatur quibusdam sit!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor ducimus quis, modi nobis blanditiis velit! Molestias nulla fugit modi vel maxime eum illum provident quod. Eum perferendis aspernatur quibusdam sit!</p>
            </div>
        </div>
    )
}

export default About;