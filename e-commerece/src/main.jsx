import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'
import ShopContextProvider from './constant/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
       <ShopContextProvider> 
            <App />
        </ShopContextProvider>
  </StrictMode>,
)
