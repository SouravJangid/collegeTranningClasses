import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Employee from './Employ.jsx'

let data=[{name:'satya',position:'dev',salary:23},{name:'sourav',position:'web',salary:32},]
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

      {/* 18-10-2024 */}
      {/* <App data={data}/> */}
      <Employee data={data}/>
  </StrictMode>,
)
