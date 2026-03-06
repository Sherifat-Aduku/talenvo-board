// src/context/useBoard.jsx
import { useContext } from "react";
import { BoardContext } from "./BoardContext.jsx";

export const useBoard = () => useContext(BoardContext);