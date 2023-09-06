import "../styles/footer.scss";
import Logo from "../images/Logo.png";

const Footer = () => {
    return (
        <footer className="footerContainer">
            <img src={Logo} alt="Logo" className="logo"/>
            <div className="navLinks">
                <a href="#hero">Home</a>
                <a href="#about">About</a>
                <a href="#music">Music</a>
                <a href="#contact">Contact</a>
            </div>
            <div className="contactContainer">
                <h1>Contact</h1>
                <p>Phone: 555-555-5555</p>
                <p>Email: email@gmail.com</p>
            </div>
            <p className="copyWrite">© Common Law Jazz</p>
        </footer>
    )
}

export default Footer;