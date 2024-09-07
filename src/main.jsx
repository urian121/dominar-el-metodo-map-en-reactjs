import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MetodoMap from './MetodoMap.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MetodoMap />
  </StrictMode>,
)
