import React from 'react'
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Signup';
import Welcome from './Home';
import NavbarApp from './Navbar'
import Topbar from "./components/Topbar";
import ChatbotApp from "./Chatbot/ChatbotApp";

function App() {
  return (
    <BrowserRouter>
    <Topbar />
    <Routes>
      <Route path='/' element={<NavbarApp />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route exact  path='/home' element={<Welcome />}></Route>
      <Route path='/posts' element={<Welcome />}></Route>
    </Routes>
    <ChatbotApp />
    </BrowserRouter>
  )
}

export default App

