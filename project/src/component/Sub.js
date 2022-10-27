import React, { lazy, Suspense } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import About from '../pages/About'
// import Home from '../pages/Home'
import ReactNavbr from '../pages/ReactNavbr'
// import Services from '../pages/Services'

const Home = lazy(()=>import ('../pages/Home'))
const About = lazy(()=>import ('../pages/About'))
const Services = lazy(()=>import('../pages/Services'))
const DisplayService = lazy(()=>import('../pages/ShowServices'))

const Sub = () => {
  return (
    <Router>
        <ReactNavbr/>
        <Suspense fallback={<h1>loading...</h1>}>
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/services/:id' element={<DisplayService/>}/>
        </Routes>
        </Suspense>

    </Router>
  )
}

export default Sub