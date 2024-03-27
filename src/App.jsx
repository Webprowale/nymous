import { useState } from 'react'
import { app } from './firabaseConfig'
import './App.css'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Register from './Pages/Auth/Register'
import Login from './Pages/Auth/Login'
import User from './Pages/User'
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SendMsg from './Pages/SendMsg'
import ViewMsg from './Pages/ViewMsg'



function App() {
  

  return (
    <>
       <ToastContainer />
       <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/user' element={<User />} />
      <Route path='/user/msg' element={<ViewMsg />} />
      <Route path='/:id' element={<SendMsg />} />
    </Routes>
    </>
  )
}

export default App

