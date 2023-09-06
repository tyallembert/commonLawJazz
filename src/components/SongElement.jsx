import "../styles/songElement.scss";
import PlayButton from "./PlayButton";

const SongElement = ({id, title, artist, length, isPlaying, currentSongId, handlePlay}) => {
    return (
        <div className="songContainer">
            <p className="songNumber">{id}</p>
            <p className="songTitle">{title}</p>
            <p className="songArtist">{artist}</p>
            <p className="songTime">{length}</p>
            <PlayButton handlePlay={handlePlay} id={id} currentSongId={currentSongId} isPlaying={isPlaying} />
        </div>
    )
}

export default SongElement;