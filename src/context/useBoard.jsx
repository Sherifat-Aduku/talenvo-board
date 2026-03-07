// src/context/useBoard.jsx
import { useContext } from "react";
import { BoardContext } from "./BoardContextObject.jsx";

// Custom hook to access BoardContext. 
export const useBoard = () => {
  const context = useContext(BoardContext);

  if (!context) {
    throw new Error("useBoard must be used inside a BoardProvider");
  }

  return context;
};