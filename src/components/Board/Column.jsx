// src/components/Board/Column.jsx
import React, { useState } from "react";
import Card from "./Card.jsx";
import Button from "../Common/Button.jsx";
import { useBoard } from "../../context/useBoard.jsx";

const Column = ({ column }) => {
  const { state, dispatch } = useBoard();
  const [cardTitle, setCardTitle] = useState("");
  const [cardDescription, setCardDescription] = useState("");

  const addCard = () => {
    if (!cardTitle) return;
    dispatch({
      type: "ADD_CARD",
      columnId: column.id,
      title: cardTitle,
      description: cardDescription,
    });
    setCardTitle("");
    setCardDescription("");
  };

  return (
    <div className="column">
      <h3>{column.name}</h3>

      <div className="add-card-section">
        <input
          placeholder="Card Title"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
        />
        <textarea
          placeholder="Card Description"
          value={cardDescription}
          onChange={(e) => setCardDescription(e.target.value)}
        />
        <Button onClick={addCard}>Add Card</Button>
      </div>

      {column.cardIds.map((cardId) => (
        <Card key={cardId} card={state.cards[cardId]} />
      ))}
    </div>
  );
};

export default Column;