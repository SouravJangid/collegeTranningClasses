import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// let data=[2,4,7]
// let dat=[2,4,8]
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App data={data} />
    <App data={dat} /> */}
    {/* 15-10-2024 */}

    {/* <App name='root' pass='root' isMarried={false} >
      <button>add someting</button>
      </App>
    <App name='root' pass='root' isMarried={false} >
      <p>paragraph</p>
      </App>
    <App name='root' pass={34} isMarried={false} >
      <p>paragraph</p>
      </App> */}
      <App/>
  </StrictMode>,
)
