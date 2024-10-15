import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

let data=[2,4,7]
let dat=[2,4,8]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App data={data} />
    <App data={dat} />


  </StrictMode>,
)
