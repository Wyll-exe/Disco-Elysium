import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Menu from './components/Menu.jsx'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App