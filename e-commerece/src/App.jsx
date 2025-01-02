import React from 'react'
import Navbar from "./layouts/Navbar.jsx"
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Shop from './layouts/Shop.jsx'
import Men from './layouts/Men.jsx'
import Women from './layouts/Women.jsx'
import Kids from './layouts/Kids.jsx'
import Popular from './layouts/Popular.jsx'
function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='men' element={<Men/>}/>
            <Route path='women' element={<Women/>}/>
            <Route path='kids' element={<Kids/>}/>
        </Routes>
        <Popular/>
    </div>
  )
}

export default App