import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Add from './Pages/Add/Add'
import Contact from './Pages/Contact/Contact'
import Edit from './Pages/Edit/Edit'
import Errors from './Pages/Errors/Errors'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className='App'>
      <h1>MERN APP</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/*' element={<Errors />} />
      </Routes>
    </div>
  )
}

export default App
