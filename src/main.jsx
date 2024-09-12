import React from 'react'
import ReactDOM from 'react-dom/client'

import { ShoppingCartProvider } from "./context";


import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <ShoppingCartProvider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ShoppingCartProvider>
  </React.StrictMode>,
)
