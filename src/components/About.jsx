import "../styles/about.scss";
import Selfie from "../images/rich_1.png";

const About = () => {
    return (
        <div className="aboutContainer" id="about">
            <img src={Selfie} alt="rich selfie" className="richSelfie"/>
            <div className="aboutTextContainer">
                <h1 className="aboutHeader">Rich Sikorski</h1>
                <p className="aboutText">Meet Rich, the creative force behind Common Law Jazz. As a passionate multi-instrumentalist, composer, and arranger, Rich crafts a fusion of classic and modern jazz vibes. Common Law Jazz is his personal musical journey, where soulful melodies and rhythms showcase his deep love for the genre. Join us in experiencing jazz through Rich's unique perspective as he brings his heartfelt dedication to life in the captivating sounds of Common Law Jazz.</p>
            </div>
        </div>
    )
}

export default About;