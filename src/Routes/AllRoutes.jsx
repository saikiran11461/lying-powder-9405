import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Security from './Security'
import Services from './Services'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/services' element={<Services/>}/>
           <Route path='/security' element={<Security/>}/>
           <Route path='/team' element={<h1>Team</h1>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes