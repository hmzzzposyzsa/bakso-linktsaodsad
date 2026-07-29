import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { installSourceGuard } from './utils/sourceGuard.js'

// Casual-copy deterrent: blocks right-click, F12/Ctrl+Shift+I/Ctrl+U, etc.
// See src/utils/sourceGuard.js for what this can and can't do.
installSourceGuard({ blockSelection: false })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
