import {useCallback, useState} from "react";
import "../styles/music.scss";
import Rich from "../images/rich_bike.png";
import {ReactComponent as Back} from "../images/Back_Arrows.svg";
import {ReactComponent as Next} from "../images/Forward_Arrows.svg";
import SongElement from "./SongElement";
import PlayButton from "./PlayButton";
import { songsData } from "../songData";

const Music = () => {

    const [songs] = useState(songsData);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songId, setSongId] = useState(0);
    const [currentSong, setCurrentSong] = useState(songs[songId]);
    const [audio] = useState(new Audio(songs[songId].src));

    const handlePlay = useCallback((songID=songId) => {
        if(songID === songId) {
            if(isPlaying) {
                audio.pause();
            }else{
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }else{
            if(isPlaying) {
                audio.pause();
            }
            audio.src = songs[songID].src;
            audio.play();
            setIsPlaying(true);
        }
        setSongId(songID);
        setCurrentSong(songs[songID]);
    }, [songId, isPlaying, songs, audio])

    const togglePlayPause = () => {
        if(isPlaying) {
            audio.pause();
        }else{
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="musicContainer">
            <h1 className="title">Music</h1>
            <div className="playerContainer">
                {/* <audio src={currentSong.src} autoPlay={isPlaying} /> */}
                <img src={Rich} alt="rich with bike" className="currentSongImage"/>
                <h1 className="currentSongTitle">{currentSong.title}</h1>
                <div className="controlsContainer">
                    <button className="controlButton previous"><Back /></button>
                    <PlayButton handlePlay={togglePlayPause} id={songId} currentSongId={songId} isPlaying={isPlaying}/>
                    <button className="controlButton next"><Next /></button>
                </div>
            </div>
            <div className="songsContainer">
                <div className="headerContainer">
                    <p className="headerElement">#</p>
                    <p className="headerElement">Title</p>
                    <p className="headerElement">Artist</p>
                    <p className="headerElement">Time</p>
                    <p className="headerElement"></p>
                </div>
                {songs.map((song, index) => {
                    var playing = false;
                    if(song === currentSong && isPlaying) {
                        playing = true;
                    }
                    return (
                        <SongElement key={index} 
                        id={index} 
                        title={song.title} 
                        artist={song.artist} 
                        time={song.time} 
                        isPlaying={playing}
                        currentSongId={songId}
                        handlePlay={handlePlay} />
                    )
                })}
            </div>
        </div>
    )
}
export default Music;