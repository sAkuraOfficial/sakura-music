import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // 踩坑：BrowserRouter 不能直接使用，需要使用 HashRouter
  // 花了我几天来解决
  <HashRouter>
    {/*<React.StrictMode>*/}
    <App />
    {/*</React.StrictMode>*/}
  </HashRouter>
)
