// src/components/Board/Card.jsx
import React, { useState } from "react";
import { useBoard } from "../../context/useBoard.jsx";
import Button from "../Common/Button.jsx";
import ReactMarkdown from "react-markdown";

const Card = ({ card }) => {
  const { dispatch } = useBoard();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(card.title);
  const [description, setDescription] = useState(card.description);

  const saveCard = () => {
    dispatch({ type: "EDIT_CARD", id: card.id, title, description });
    setIsEditing(false);
  };

  return (
    <div className="card">
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button onClick={saveCard}>Save</Button>
          <Button onClick={() => setIsEditing(false)}>Cancel</Button>
        </>
      ) : (
        <>
          <h4>{card.title}</h4>
          <ReactMarkdown>{card.description}</ReactMarkdown>
          <Button onClick={() => setIsEditing(true)}>Edit</Button>
          <Button
            onClick={() =>
              dispatch({ type: "DELETE_CARD", id: card.id, columnId: card.columnId })
            }
          >
            Delete
          </Button>
        </>
      )}
    </div>
  );
};

export default Card;