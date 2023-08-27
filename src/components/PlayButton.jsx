import {ReactComponent as Play} from "../images/Play.svg";
import {ReactComponent as Pause} from "../images/Pause.svg";
import "../styles/playButton.scss";
// import {useState} from "react";

const PlayButton = ({handlePlay, id, currentSongId, isPlaying}) => {
    const handleClick = () => {
        handlePlay(id);
    }
    return (
        (id === currentSongId && isPlaying) ? (
            <button className="controlButton pause" onClick={handleClick}><Pause /></button>
        ) : (
            <button className="controlButton play" onClick={handleClick}><Play /></button>
        )
    )
}

export default PlayButton;