import React, { useRef } from "react";
import ItemsDialog from "./ItemsDialog";

export default function Items({ icon, iconName, link }) {
  const dialog = useRef(null);

  function openDialog(){
    dialog.current.showModal();
  }
  function closeDialog(){
    dialog.current.close();
  }

  return (
    <>
      <li className="flex gap-2 p-1.5 lg:p-2 hover:bg-blue-500 hover:text-white cursor-pointer" onClick={openDialog}>
        <img src={icon} alt={iconName} className=" w-5 h-5" />
        <span className="w-40 truncate">{iconName}</span>
      </li>
      <ItemsDialog ref={dialog} close={closeDialog} open={openDialog} link={link}>
        <img src={icon} alt={iconName} className=" w-10 h-10 " />
        <p className=" text-sm">Can not load ({iconName}) for Windows 6.0 files.</p>
      </ItemsDialog>
    </>
  );
}
