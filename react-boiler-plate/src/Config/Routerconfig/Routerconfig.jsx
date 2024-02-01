import React from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Login from '../../Screens/Login/Login'
import Register from '../../Screens/Register/Register'

const Routerconfigs = () => {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routerconfigs