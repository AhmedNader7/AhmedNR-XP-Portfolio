import React, { forwardRef } from "react";
import { createPortal } from "react-dom";

const ItemsDialog = forwardRef(function ItemsDialog(
  { children, close, link },
  dialog,
) {
  return createPortal(
    <dialog
      ref={dialog}
      onClick={(e) => {
        if (e.target === dialog.current) {
          close();
        }
      }}
      className=" absolute top-1/2 left-1/10  rounded-t-xl bg-[#E9E7D8] sm:left-4/10 sm:top-1/2"
    >
      <nav className="w-full h-8 bg-[url(/taskBar/message-bar.png)] bg-cover rounded-t-xl flex justify-end items-end">
        <button
          onClick={close}
          className="text-white bg-[url(/taskBar/xButton.png)] bg-cover h-6 w-6 rounded-sm mr-2 border cursor-pointer"
        >
          <span className="flex w-full h-full rounded-sm hover:bg-white/20 active:bg-black/30"></span>
        </button>
      </nav>
      <div className="border-3 border-blue-600 flex flex-col p-3 gap-2">
        {children}
        <div className=" flex justify-around">
          <button onClick={close} className="border cursor-pointer">
            <span className="border-2 px-2 border-t-amber-50 border-l-amber-50 border-r-stone-500 border-b-stone-500 active:border-dotted active:border-black">
              close
            </span>
          </button>
          <button onClick={close} className="border cursor-pointer">
            <a href={link} target="_blank">
              <span className="border-2 px-2 border-t-amber-50 border-l-amber-50 border-r-stone-500 border-b-stone-500 active:border-dotted active:border-black">
                open anyway
              </span>
            </a>
          </button>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  );
});
export default ItemsDialog;
