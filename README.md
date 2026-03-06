### Collaborative Knowledge Board - Stage 1
## Project Overview

This project is a collaborative workspace tool that allows teams to organize ideas, documentation, and tasks.
Users can create multiple boards, add columns within boards, and create cards inside columns. Cards support markdown descriptions, tags, and due dates.

The goal of this project is to demonstrate scalable state management, clean UI design, performance awareness, and accessibility discipline, as required for Stage 1.

## Folder Structure
src/
 ├─ components/
 │   ├─ Dashboard/           # Workspace dashboard components
 │   │   └─ WorkspaceDashboard.jsx
 │   ├─ Board/               # Board view components
 │   │   ├─ Board.jsx
 │   │   ├─ Column.jsx
 │   │   └─ Card.jsx
 │   └─ common/              # Reusable UI components
 │       ├─ Modal.jsx
 │       └─ Button.jsx
 ├─ context/
 │   └─ BoardContext.jsx     # Centralized state management
 ├─ pages/
 │   ├─ index.jsx            # Home/Dashboard page
 │   └─ BoardPage.jsx        # Individual board page
 └─ utils/
     └─ markdownParser.js    # Markdown support for cards

## State Architecture

# Normalized State:
State is organized in three main objects: boards, columns, and cards. Each entity is referenced by its unique ID to avoid deeply nested structures.

# Separation of UI and Domain State:
UI states such as modal visibility and input fields live in local component state. Core data (boards, columns, cards) live in the global BoardContext state.

# Scalability:
The structure allows easy updates, additions, or deletions, and is prepared for real-time updates in future stages.

# State Diagram:

boards (id, title, description, createdAt, columnIds)
      |
      v
columns (id, name, cardIds)
      |
      v
cards (id, title, description, tags, dueDate)
Performance Strategy

Components like Column and Card are wrapped in React.memo() to prevent unnecessary re-renders.

useCallback() is used for functions passed as props.

Lazy loading is implemented for the board page to reduce initial render cost.

Accessibility

Semantic HTML tags are used: <button>, <header>, <main>, <ul>.

Interactive elements have aria-label attributes for screen readers.

Keyboard navigation is supported for modals (focus trap and ESC to close).

Focus is properly managed when opening and closing modals.

# Key Engineering Decisions

Chose useReducer + Context API for normalized, scalable state management.

Vanilla CSS is used for styling, no external UI libraries were used to comply with Stage 1 rules.

React Markdown is used to render card descriptions in Markdown format.

Components are designed to be small, reusable, and focused to avoid bloated code.

# Deployment

GitHub Repository: [Add your repo link]

Live Demo: [Add your deployed app link]