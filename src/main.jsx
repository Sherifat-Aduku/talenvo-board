import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BoardProvider } from "./context/BoardContext"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BoardProvider>
    <App />
    </BoardProvider>
  </StrictMode>
);
