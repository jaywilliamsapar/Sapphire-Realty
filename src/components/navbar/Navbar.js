import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

import { MdOutlineRealEstateAgent } from "react-icons/md";


import './Navbar.css'


const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

  return (
    <div className='navbar'>
        <div className='container'>
            <h1><span className='animate-d'><MdOutlineRealEstateAgent  />Sapphire</span> Realty</h1>
            <button className='btn'>Sign In</button>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="#">Home</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<IoMdCloseCircle className='icon' />) : (<FaBars className='icon' />)}
                 
                
            </div>
        </div>
    </div>
  )
}

export default Navbar
