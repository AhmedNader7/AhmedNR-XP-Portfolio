import React, { useState, useEffect } from "react";
import { projects } from "../projects.js";

export default function DeskTopProjects() {
  const [selectIndex, setSelectIndex] = useState(null);

  const width = screen.availWidth;
  const height = screen.availHeight;

  useEffect(() => {
    const handleWindowClick = () => {
      setSelectIndex(null);
    };

    window.addEventListener("click", handleWindowClick);
    return () => window.removeEventListener("click", handleWindowClick);
  }, []);

  return (
    <div className="p-2 h-full flex flex-col flex-wrap pb-10">
      {projects.map((project, index) => (
        <div
          key={index}
          onClick={(e) => {
            e.stopPropagation();
            setSelectIndex(index);
          }}
          onDoubleClick={() => {
            window.open(`${project.link}`, "_blank", `width=${width > 1024 ? width / 2 : width},height=${height / 2}`);
          }}
          onTouchStart={() => {
            window.open(`${project.link}`, "_blank", `width=${width},height=${height}`);
          }}
          className={`
            w-25 mb-2 cursor-pointer flex flex-col items-center text-center
            ${selectIndex === index && "bg-blue-300/50"}
          `}
        >
          <img
            src={project.icon}
            alt={project.name}
            width={70}
            className="p-2"
          />
          <p className="text-xs p-2 text-white">{project.name}</p>
        </div>
      ))}
    </div>
  );
}
