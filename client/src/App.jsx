import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import PropertyDetail from './Pages/PropertyDetail'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar'
import ScrollToTop from './Components/ScrollToTop'
import PostProperty from './Pages/PostProperty'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/listings/:id' element={<PropertyDetail />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/listings/new' element={<PostProperty />} />

      </Routes>
    </BrowserRouter>
  )
}


