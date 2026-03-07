// src/context/BoardContext.jsx
import React, {  useReducer } from "react";
import { BoardContext } from "./BoardContextObject";

const initialState = {
  boards: {},   // boardId: { id, title, description, createdAt, columnIds: [] }
  columns: {},  // columnId: { id, name, cardIds: [] }
  cards: {},    // cardId: { id, title, description, tags: [], dueDate, columnId }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOARD": {
      const boardId = Date.now().toString();
      return {
        ...state,
        boards: {
          ...state.boards,
          [boardId]: {
            id: boardId,
            title: action.title,
            description: action.description,
            createdAt: new Date().toISOString(),
            columnIds: [],
          },
        },
      };
    }

    case "DELETE_BOARD": {
      const newBoards = { ...state.boards };
      delete newBoards[action.id];
      return { ...state, boards: newBoards };
    }

    case "ADD_COLUMN": {
      const columnId = Date.now().toString();
      return {
        ...state,
        columns: {
          ...state.columns,
          [columnId]: { id: columnId, name: action.name, cardIds: [] },
        },
        boards: {
          ...state.boards,
          [action.boardId]: {
            ...state.boards[action.boardId],
            columnIds: [...state.boards[action.boardId].columnIds, columnId],
          },
        },
      };
    }

    case "DELETE_COLUMN": {
      const updatedColumns = { ...state.columns };
      delete updatedColumns[action.id];
      return {
        ...state,
        columns: updatedColumns,
        boards: {
          ...state.boards,
          [action.boardId]: {
            ...state.boards[action.boardId],
            columnIds: state.boards[action.boardId].columnIds.filter(
              (id) => id !== action.id
            ),
          },
        },
      };
    }

    case "ADD_CARD": {
      const cardId = Date.now().toString();
      return {
        ...state,
        cards: {
          ...state.cards,
          [cardId]: {
            id: cardId,
            title: action.title,
            description: action.description,
            tags: action.tags || [],
            dueDate: action.dueDate || "",
            columnId: action.columnId,
          },
        },
        columns: {
          ...state.columns,
          [action.columnId]: {
            ...state.columns[action.columnId],
            cardIds: [...state.columns[action.columnId].cardIds, cardId],
          },
        },
      };
    }

    case "EDIT_CARD": {
      const { id, title, description } = action;
      return {
        ...state,
        cards: {
          ...state.cards,
          [id]: {
            ...state.cards[id],
            title: title ?? state.cards[id].title,
            description: description ?? state.cards[id].description,
          },
        },
      };
    }

    case "DELETE_CARD": {
      const updatedCards = { ...state.cards };
      delete updatedCards[action.id];
      return {
        ...state,
        cards: updatedCards,
        columns: {
          ...state.columns,
          [action.columnId]: {
            ...state.columns[action.columnId],
            cardIds: state.columns[action.columnId].cardIds.filter(
              (id) => id !== action.id
            ),
          },
        },
      };
    }

    default:
    return state;
  }
};

export const BoardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BoardContext.Provider value={{ state, dispatch }}>
      {children}
    </BoardContext.Provider>
  );
};