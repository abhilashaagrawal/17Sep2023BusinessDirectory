//1 Import Area
import React from 'react'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Login from './pages/Login'
import Registration from './pages/Registration'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Notfound from './pages/Notfound'
import Layout from './components/ui/Layout'

//2 Function Defination
export default function App() {
  return (
   <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />}></Route>
              <Route path="detail" element={<Detail />}></Route>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Registration />}></Route>
            </Route>
            <Route path="/*" element={<Notfound />}></Route>
        </Routes>
    </BrowserRouter>
   </>
  )
}

//3 Export Area