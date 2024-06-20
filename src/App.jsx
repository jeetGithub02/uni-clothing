import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'
import DiscoverProducts from './pages/DiscoverProducts'
import Simmer from './components/Simmer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
          <Routes>
              <Route element={<Rootlayout/>}>
                  <Route index element={<Home/>} />
                  <Route path="/products" element={<DiscoverProducts/>} />
                  <Route path="/category/:categoryName" element={<DiscoverProducts/>} />
                  <Route path="/products/:id" />
              </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App
