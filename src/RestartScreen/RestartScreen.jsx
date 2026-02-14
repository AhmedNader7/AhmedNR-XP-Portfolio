import React from 'react'
import nameXP from '../assets/restartImage/windowsXP.png'
import myPicture from '../assets/myPhoto/file.jpg'
import { useUI } from '../context/UIControl'

export default function RestartScreen() {
    const {closeRestart} = useUI()

    const playSound = () => {
    const audio = new Audio("/windows-xp-startup.mp3");
    audio.play();
  };

  return (
    <div className=' w-full h-screen bg-amber-400 '>
        <nav className=' w-full h-[10%] bg-[#003399] border border-b-white'>
            
        </nav>
        <div className=' w-full h-[75%] bg-[#6487DC] flex flex-col lg:flex-row justify-center items-center gap-5'>
            <div className=''><img src={nameXP} alt="windows XP image" className=' w-50 h-40 lg:w-100 lg:h-80 pr-5'/></div>
            <div className="h-0.5 lg:h-[50%] w-full lg:w-0.5 bg-linear-to-r lg:bg-linear-to-t from-transparent via-white to-transparent opacity-80 "></div>
            <button className=' h-15 lg:h-20 flex gap-2 hover:bg-linear-to-r via-[#003399] cursor-pointer' onClick={() => {closeRestart()
                playSound()}
            }>
                <img src={myPicture} alt="" className=' h-full hover:border-2 hover:border-[#ffb700]'/>
                <div className='flex flex-col justify-between text-white text-sm mr-5'>
                    <p>Ahmed Nader</p>
                    <p>To begin, Click me</p>
                </div>
            </button>
        </div>
        <footer className='w-full h-[15%] bg-[#003399] border border-t-white flex flex-col items-center justify-center'>
            <p className='text-white'>Welcom To My First Portfolio.</p>
            <p className='text-white'>It was created using React.</p>
        </footer>
    </div>
  )
}
