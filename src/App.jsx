// src/App.jsx
import React, { useState } from "react";
import { BoardProvider } from "./context/BoardContext.jsx";
import WorkspaceDashboard from "./components/Dashboard/WorkspaceDashboard.jsx";
import BoardPage from "./pages/BoardPage.jsx";

function App() {
  const [currentBoardId, setCurrentBoardId] = useState(null);

  const goBack = () => setCurrentBoardId(null);

  return (
    <BoardProvider>
      {!currentBoardId ? (
        <WorkspaceDashboard openBoard={setCurrentBoardId} />
      ) : (
        <BoardPage boardId={currentBoardId} goBack={goBack} />
      )}
    </BoardProvider>
  );
}

export default App;