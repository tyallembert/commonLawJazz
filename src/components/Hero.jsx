import "../styles/hero.scss";
import Logo from "../images/Logo.png";

const Hero = () => {
    return (
        <div className="heroContainer" id="hero">
            <img src={Logo} alt="Logo" className="logo"/>
        </div>
    )
}

export default Hero