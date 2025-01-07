import React from 'react'
import Navbar from "./layouts/Navbar.jsx"
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
// import Men from './layouts/Men.jsx'
// import Women from './layouts/Women.jsx'
// import Kids from './layouts/Kids.jsx'
import Footer from './layouts/Footer.jsx'
import ShopCategory from './pages/ShopCategory.jsx'
import men_banner from '../public/Assets/banner_mens.png'
import women_banner from '../public/Assets/banner_women.png'
import kids_banner from '../public/Assets/banner_kids.png'
import {BrowserRouter} from 'react-router-dom'
import LogIn from './layouts/LogIn.jsx'
import SignUp from './layouts/SignUp.jsx'

function App() {
  return (
    <div className="master_container">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='shop' element={<HomePage/>}/>
            <Route path='men' element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path='women' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='kids' element={<ShopCategory banner={kids_banner} category="kid"/>}/>
            <Route path="login" element={<LogIn/>}/>
            <Route path="signup" element={<SignUp/>}/>

        </Routes>
        <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default App