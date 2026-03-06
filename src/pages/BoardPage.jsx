// src/pages/BoardPage.jsx
import React, { useState } from "react";
import Column from "../components/Board/Column.jsx";
import Button from "../components/Common/Button.jsx";
import { useBoard } from "../context/useBoard.jsx";

const BoardPage = ({ boardId, goBack }) => {
  const { state, dispatch } = useBoard();
  const board = state.boards[boardId];
  const [columnName, setColumnName] = useState("");

  if (!board) return <p>Board not found</p>;

  const addColumn = () => {
    if (!columnName) return;
    dispatch({ type: "ADD_COLUMN", boardId, name: columnName });
    setColumnName("");
  };

  return (
    <div className="board-page">
      <h1>{board.title}</h1>

      <Button onClick={goBack}>Back to Dashboard</Button>

      <div className="add-column-section">
        <input
          placeholder="Column Name"
          value={columnName}
          onChange={(e) => setColumnName(e.target.value)}
        />
        <Button onClick={addColumn}>Add Column</Button>
      </div>

      <div className="columns">
        {board.columnIds.map((colId) => (
          <Column key={colId} column={state.columns[colId]} />
        ))}
      </div>
    </div>
  );
};

export default BoardPage;