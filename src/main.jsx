import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UIControlProvider from './context/UIControl.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIControlProvider>
      <App />
    </UIControlProvider>
  </StrictMode>,
)
