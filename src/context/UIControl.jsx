import React, { createContext, useContext, useState } from "react";

const UIControl = createContext();

export default function UIControleProvider({ children }) {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isMediaPlayerOpen, setIsMediaPlayerOpen] = useState(false);
  const [isRestartOpen, setIsRestartOpen] = useState(true);
  return (
    <UIControl.Provider
      value={{
        isCalculatorOpen,
        isMediaPlayerOpen,
        openCalculator: () => setIsCalculatorOpen(true),
        closeCalculator: () => setIsCalculatorOpen(false),
        openMediaPlayer: () => setIsMediaPlayerOpen(true),
        closeMediaPlayer: () => setIsMediaPlayerOpen(false),
        openRestart: () => setIsRestartOpen(true),
        closeRestart: () => setIsRestartOpen(false),
        isRestartTrue: isRestartOpen,
      }}
    >
      {children}
    </UIControl.Provider>
  );
}

export function useUI() {
  return useContext(UIControl);
}
