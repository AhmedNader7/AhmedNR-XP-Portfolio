import React from "react";
import TaskBar from "../TaskBar/TaskBar";
import DeskTopProjects from "../DeskTopProjects/DeskTopProjects";
import Calculator from "../Calculator/Calculator";
import { useUI } from "../context/UIControl";
import MediaPlayer from "../MediaPlayer/MediaPlayer";

export default function DeskTop() {
  const { isCalculatorOpen, isMediaPlayerOpen } = useUI();
  return (
    <>
      {isCalculatorOpen && <Calculator />}
      <div className="h-screen bg-[url(/bgWindowsXP/bgWindowsXP.jpg)] bg-center bg-cover">
        {isMediaPlayerOpen && <MediaPlayer />}
        <DeskTopProjects />
      </div>
      <TaskBar />
    </>
  );
}
