import React, { useEffect, useState } from "react";
import StartList from "../StartList/StartList";

export default function TaskBar() {
  const [time, setTime] = useState(new Date());
  const [open, setOpen] = useState(false);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function closeList() {
    setOpen(false);
  }

  return (
    <>
      <StartList display={open} closeList={closeList} />
      <div className="h-7.5 w-full absolute bottom-0 flex justify-between items-center bg-[url(/taskBar/taskbar-bg.webp)]">
        <button
          className="w-24 h-7.5 cursor-pointer bg-[url(/taskBar/start-button.webp)] bg-cover"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="block hover:bg-white/50 w-24 h-7 mask-x-from-60%"></span>
        </button>
        <div className="text-white h-full px-2 text-[11px] flex items-center bg-[url(/taskBar/system-tray.webp)]">
          {hours <= 12
            ? `${hours}:${minutes < 10 ? `0${minutes}` : minutes} AM`
            : `${hours - 12}:${minutes < 10 ? `0${minutes}` : minutes} PM`}
        </div>
      </div>
    </>
  );
}
