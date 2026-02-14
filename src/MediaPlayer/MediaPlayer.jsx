import React, { useRef, useState } from "react";
import mediaPlayerIcon from '../assets/mediaPlayerIcon/dwsd58yvs5pe1.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import {musics} from '../musics.js';
import { useUI } from "../context/UIControl.jsx";

export default function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { closeMediaPlayer } = useUI();
  
  const audioRef = useRef(null);

    function togglePlayPause() {
      const audio = audioRef.current;
      if(!audio) return;

      if (isPlaying) {
        audio.pause();
      }else {
        audio.play();
      }

      setIsPlaying(!isPlaying)
    }

    function nextMusic() {
      setIsPlaying(false)
      if (currentIndex === musics.length - 1) {
        return setCurrentIndex(0);
      }
      setCurrentIndex(prev => prev + 1)
    }
    function backMusic() {
      setIsPlaying(false)
      if (currentIndex === 0) {
        return setCurrentIndex(musics.length - 1);
      }
      setCurrentIndex(prev => prev - 1)
    }

  return (
    <div className="absolute w-full h-full flex justify-center items-start">
      <div className=" w-75 md:w-[50%] h-[80%] bg-[#EBE9D8] rounded-t-xl border-x-2 border-b-2 border-blue-600 flex flex-col justify-between bg-cover bg-center" style={{
    backgroundImage: `url(${musics[currentIndex].img})`,

  }}>
        <nav className="w-full h-8 bg-[url(/taskBar/message-bar.png)] bg-cover rounded-t-xl flex justify-between items-center px-1">
          <div className=" flex items-center gap-1">
            <img src={mediaPlayerIcon} alt="Media Player Icon" className=" w-6" />
            <p className="text-sm text-white">Media Player</p>
          </div>
          <button className="text-white bg-[url(/taskBar/xButton.png)] bg-cover h-6 w-6 rounded-sm mr-2 border cursor-pointer " onClick={closeMediaPlayer}>
            <span className="flex w-full h-full rounded-sm hover:bg-white/20 active:bg-black/30"></span>
          </button>
        </nav>
        <footer className=" w-full h-20 bg-[#005799] flex items-center justify-center gap-3">
            <button onClick={backMusic} className=" bg-white w-5 h-5 rounded-full flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faAngleLeft} style={{ color: "#005799" }}/>
            </button>
            <button onClick={togglePlayPause} className=' bg-white w-8 h-8 rounded-full cursor-pointer'>
              <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} style={{ color: "#005799" }} />
            </button>
            <button onClick={nextMusic} className=" bg-white w-5 h-5 rounded-full flex items-center cursor-pointer">
              <FontAwesomeIcon icon={faAngleRight} style={{ color: "#005799" }}/>
            </button>
            <audio ref={audioRef} src={musics[currentIndex].audio} onEnded={() => {
              nextMusic()
            }}/>
        </footer>
      </div>
    </div>
  );
}
