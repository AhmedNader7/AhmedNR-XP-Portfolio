import React, { useState } from "react";
import calculatorIcon from "../assets/calculatorIcon/Calc.png";
import CalculatorButton from "./CalculatorButton";
import { useUI } from "../context/UIControl";

export default function Calculator() {
  const [storeData, setStoreData] = useState("");
  const { closeCalculator } = useUI();

  function handleCalculation() {
    try {
      setStoreData(Function(`return ${storeData}`)());
      // Using Function() here is generally unsafe.
      // In this project, input is fully controlled via UI buttons (no user typing),
      // so there is no risk of code injection.
    } catch {
      setStoreData("");
    }
  }

  return (
    <div className="absolute w-full h-full flex justify-center items-center">
      <div className="  w-75 h-80 bg-[#EBE9D8] rounded-t-xl border-x-2 border-b-2 border-blue-600">
        <nav className="w-full h-8 bg-[url(/taskBar/message-bar.png)] bg-cover rounded-t-xl flex justify-between items-center px-1">
          <div className=" flex items-center gap-1">
            <img src={calculatorIcon} alt="calculator Icon" className=" w-6" />
            <p className="text-sm text-white">Calculator</p>
          </div>
          <button
            className="text-white bg-[url(/taskBar/xButton.png)] bg-cover h-6 w-6 rounded-sm mr-2 border cursor-pointer "
            onClick={closeCalculator}
          >
            <span className="flex w-full h-full rounded-sm hover:bg-white/20 active:bg-black/30"></span>
          </button>
        </nav>

        <div className=" bg-white h-7 m-3 border border-black flex justify-end items-center p-1 overflow-hidden">
          {storeData ? storeData : "0"}
        </div>

        <div className="m-3 flex justify-end">
          <div
            onClick={() => setStoreData("")}
            className="bg-white w-fit px-14 py-1 rounded-lg border border-black cursor-pointer text-red-500"
          >
            C
          </div>
        </div>

        <div className="m-3 flex flex-wrap justify-between gap-2">
          <CalculatorButton
            textColor={"text-blue-700"}
            getData={setStoreData}
            calculate={handleCalculation}
          />
        </div>
      </div>
    </div>
  );
}
