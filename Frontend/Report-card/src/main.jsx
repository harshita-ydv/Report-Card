import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Clear from './components/Clear.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Clear/> */}
  </StrictMode>,
)
