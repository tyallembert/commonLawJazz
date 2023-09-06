import "../styles/navigation.scss";

const Navigation = () => {
    return (
        <div className="navigationContainer">
            <div className="navElementsContainer">
                <a className="navElement" href="#hero">HOME</a>
                <a className="navElement" href="#about">ABOUT</a>
                <a className="navElement" href="#music">MUSIC</a>
            </div>
        </div>
    )
}

export default Navigation;