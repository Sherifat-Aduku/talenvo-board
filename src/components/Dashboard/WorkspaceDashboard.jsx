// src/components/Dashboard/WorkspaceDashboard.jsx
import React, { useState } from "react";
import { useBoard } from "../../context/useBoard.jsx";
import Button from "../Common/Button.jsx";

const WorkspaceDashboard = ({ openBoard }) => {
  const { state, dispatch } = useBoard();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addBoard = () => {
    if (!title) return;
    dispatch({ type: "ADD_BOARD", title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="workspace-dashboard">
      <h1>Workspace Dashboard</h1>

      <input
        placeholder="Board Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Board Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={addBoard}>Add Board</Button>

      <ul>
        {Object.values(state.boards).map((board) => (
          <li key={board.id} className="board">
            <h3>{board.title}</h3>
            <p>{board.description}</p>
            <Button onClick={() => openBoard(board.id)}>Open</Button>
            <Button onClick={() =>
              dispatch({ type: "DELETE_BOARD", id: board.id })
            }>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorkspaceDashboard;