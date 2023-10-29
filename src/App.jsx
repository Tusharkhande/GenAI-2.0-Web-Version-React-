import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Signin from './pages/SignIn';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/chat" element={<Chat/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App