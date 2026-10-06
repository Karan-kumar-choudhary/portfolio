import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Profile from '../pages/Profile'
import About from '../pages/About'
import Work from '../pages/Work'
import Contact from '../pages/Contact'
import Home from "../pages/BannerSection"
import HomeMain from '../pages/HomeMain'
// yaha par routes banayenge saaare 

const AppRoutes = () => {
  return (
    <div>
        
     <Routes>
       <Route path="/" element={<HomeMain/>} />
          <Route path="/about" element={<About />} />
               <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />  
            <Route path="/profile" element={<Profile />} />   
          
     
     </Routes>
    </div>
  )
}

export default AppRoutes