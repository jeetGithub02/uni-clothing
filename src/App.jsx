import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'
import DiscoverProducts from './pages/DiscoverProducts'
import Login from './components/Login'
import Register from './pages/Signup'
import Signup from './pages/Signup'
import SingleProduct from './pages/SingleProduct'

function App() {

  return (
    <BrowserRouter>
          <Routes>
              <Route element={<Rootlayout/>}>
                  <Route index element={<Home/>} />
                  <Route path="/products" element={<DiscoverProducts/>} />
                  <Route path="/category/:categoryName" element={<DiscoverProducts/>} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/signup" element={<Signup/>} />
                  <Route path="/products/:productId" element={<SingleProduct/>} />
                  <Route path='/' />
              </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default App
