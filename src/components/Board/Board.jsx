import React from "react";
import { useBoard } from "../../context/useBoard.jsx";
import Column from "./Column.jsx";

const Board = ({ boardId }) => {
  const { state } = useBoard();

  const board = state.boards[boardId];

  if (!board) {
    return <p>Board not found</p>;
  }

  return (
    <div>
      {board.columnIds.map((columnId) => (
        <Column key={columnId} columnId={columnId} boardId={boardId} />
      ))}
    </div>
  );
};

export default Board;