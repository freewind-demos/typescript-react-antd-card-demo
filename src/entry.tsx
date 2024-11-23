import React from 'react'
import ReactDOM from 'react-dom/client'
import { Hello } from './hello'

import 'antd/dist/reset.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div style={{ padding: '50px' }}>
      <Hello />
    </div>
  </React.StrictMode>,
)
