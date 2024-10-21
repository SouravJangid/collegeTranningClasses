import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Test from './test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App n={2} m={3} /><br /><br /><hr /><br /><br />
    <Test />
  </StrictMode>,
)
