import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Home'
import Sobre from './Sobre'
import Usuario from './Usuario'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/sobre' element={<Sobre />}></Route>
      <Route path='/usuario' element={<Usuario />}></Route>
    </Routes>
  </BrowserRouter>
)
