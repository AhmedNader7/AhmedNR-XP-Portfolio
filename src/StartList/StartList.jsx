import React, { useState } from "react";
import myPhoto from "../assets/myPhoto/file.jpg";
import folder from "../assets/diskTopIcons/folder.png";
import Items from "./Items";
import { skills } from "../dataSkils";
import { apps } from "../socialMedia";
import { projects } from "../projects";
import calculatorIcon from "../assets/calculatorIcon/Calc.png";
import mediaPlayerIcon from "../assets/mediaPlayerIcon/dwsd58yvs5pe1.png";
import logOff from "../assets/restartImage/key-log-icon.webp";
import { useUI } from "../context/UIControl";

export default function StartList({ display, closeList }) {
  const [displayList, setDisplayList] = useState(false);
  const { openCalculator, openMediaPlayer, openRestart } = useUI();

  function blockListSkills() {
    setDisplayList((prev) => !prev);
  }

  return (
    <>
      <ul
        className={`bg-white absolute left-40 bottom-60  lg:left-70 lg:bottom-65 z-10 p-1 flex flex-col gap-1 lg:gap-2 ${displayList ? "block" : "hidden"}`}
        onMouseEnter={blockListSkills}
        onMouseLeave={blockListSkills}
      >
        {skills.map((skill) => {
          return (
            <li className="flex gap-2 items-center">
              <img src={skill.icon} alt={skill.name} className="w-3 lg:w-5 " />
              <p className=" text-sm font-extralight">{skill.name}</p>
            </li>
          );
        })}
      </ul>
      <div
        className={`fixed bottom-7.5 bg-white w-75 h-100 lg:h-112.5 rounded-t-lg ${display ? "block" : "hidden"}`}
      >
        <nav className="bg-[url(/taskBar/startMenuNav.png)] h-15 bg-cover rounded-t-lg">
          <div className="flex items-center">
            <div className="w-20 h-full ">
              <img src={myPhoto} alt="" className="p-2 rounded-xl" />
            </div>
            <span className="w-full text-white font-bold">Ahmed Nader</span>
          </div>
        </nav>
        <div className="h-1 w-full bg-linear-to-r from-transparent via-[#ffb700] to-transparent opacity-80 absolute top-14"></div>
        <div className="h-3/4 flex ">
          <div className="w-1/2">
            <p className="text-xs pl-1">Projects Repositories</p>
            <ul className="text-sm">
              {projects.map((project) => {
                return (
                  <Items
                    icon={project.icon}
                    iconName={project.name}
                    link={project.repo}
                  />
                );
              })}
            </ul>
          </div>
          <div className=" border-l border-gray-400 w-1/2 bg-[#D4E4FB]">
            <ul className="text-sm">
              {apps.map((app) => {
                return (
                  <Items icon={app.icon} iconName={app.name} link={app.link} />
                );
              })}
            </ul>
            <span className="block border-b border-gray-400 h-0.5 w-5/6 mask-x-from-60% mx-3 "></span>
            <div
              className=" flex justify-between hover:bg-blue-500 hover:text-white p-2 text-sm font-light items-center cursor-pointer"
              onMouseEnter={blockListSkills}
              onMouseLeave={blockListSkills}
            >
              <div className="flex items-center gap-1">
                <img src={folder} alt="" className=" w-6 h-6" />
                <span>My Skills</span>
              </div>
              <span>►</span>
            </div>
            <span className="block border-b border-gray-400 h-0.5 w-5/6 mask-x-from-60% mx-3 "></span>
            <div
              className="flex gap-1 hover:bg-blue-500 hover:text-white p-2 text-sm font-light items-center cursor-pointer "
              onClick={() => {
                openMediaPlayer();
                closeList();
              }}
            >
              <img
                src={mediaPlayerIcon}
                alt="Medai Player Icon"
                className="w-6"
              />
              <p className=" text-sm font-extralight">Musics</p>
            </div>
            <div
              className="flex gap-1 hover:bg-blue-500 hover:text-white p-2 text-sm font-light items-center cursor-pointer "
              onClick={() => {
                openCalculator();
                closeList();
              }}
            >
              <img src={calculatorIcon} alt="calculator icon" className="w-6" />
              <p className=" text-sm font-extralight">Calculator</p>
            </div>
          </div>
        </div>
        <footer className="bg-[url(/taskBar/startMenuFooter.png)] h-13 bg-cover p-2 flex justify-end">
          <div
            className="flex justify-end items-center gap-2 hover:bg-[#003399]/50 p-2 w-fit cursor-pointer"
            onClick={openRestart}
          >
            <img src={logOff} alt="log off icon" className="w-7 h-7" />
            <p className="text-white text-xs">Log Off</p>
          </div>
        </footer>
      </div>
    </>
  );
}
