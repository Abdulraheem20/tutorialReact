import React from 'react'
import {NavLink} from 'react-router-dom'
import navLogo from '../images/profile-pic (4.png'
import {FaHome} from 'react-icons/fa'

const ReactNavbr = () => {
  return (
    <div>
        <div className="logo">
            <img src={navLogo} alt="Logo" style={{width: '50px', height: '50px', borderRadius: '50%'}} />
        </div>
        <div className="navLinks">
            <ul>
                <li><NavLink to="/"><FaHome/>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
            </ul>
        </div>
    </div>
  )
}

export default ReactNavbr