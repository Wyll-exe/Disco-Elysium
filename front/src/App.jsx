import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Menu from './components/Menu.jsx'
import Start from './components/Start.jsx'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="Start" element={<Start />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App