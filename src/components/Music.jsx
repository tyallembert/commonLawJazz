import {useCallback, useEffect, useState} from "react";
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
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSong, setCurrentSong] = useState(songs[songId]);
    const [audio] = useState(new Audio(songs[songId].src));

    useEffect(() => {
    
        const handleTimeUpdate = () => {
          setCurrentTime(audio.currentTime);
        };
    
        const handleLoadedMetadata = () => {
          setDuration(audio.duration);
        };
    
        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
      }, [audio]);

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

    const handlePrevious = () => {
        if(songId === 0) {
            handlePlay(songs.length - 1);
        }else{
            handlePlay(songId - 1);
        }
    }

    const handleNext = () => {
        if(songId === songs.length - 1) {
            handlePlay(0);
        }else{
            handlePlay(songId + 1);
        }
    }

    const togglePlayPause = () => {
        if(isPlaying) {
            audio.pause();
        }else{
            audio.play();
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="musicContainer" id="music">
            <div className="playerContainer">
                <img src={Rich} alt="rich with bike" className="currentSongImage"/>
                <h1 className={isPlaying ? "currentSongTitle songPlaying": "currentSongTitle"}>{currentSong.title}</h1>
                <div className="controlsContainer">
                    <div className="progressBarContainer">
                        <div className="progressBar" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                    </div>
                    <button className="controlButton previous" onClick={handlePrevious}><Back /></button>
                    <PlayButton handlePlay={togglePlayPause} id={songId} currentSongId={songId} isPlaying={isPlaying}/>
                    <button className="controlButton next" onClick={handleNext}><Next /></button>
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
                        length={song.length} 
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