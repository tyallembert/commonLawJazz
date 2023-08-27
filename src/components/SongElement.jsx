import "../styles/songElement.scss";
import PlayButton from "./PlayButton";

const SongElement = ({id, title, artist, time, isPlaying, currentSongId, handlePlay}) => {
    return (
        <div className="songContainer">
            <p className="songNumber">{id}</p>
            <p className="songTitle">{title}</p>
            <p className="songArtist">{artist}</p>
            <p className="songTime">3:25</p>
            <PlayButton handlePlay={handlePlay} id={id} currentSongId={currentSongId} isPlaying={isPlaying} />
        </div>
    )
}

export default SongElement;