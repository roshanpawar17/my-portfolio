import React, { useState } from 'react'
import { Link } from 'react-scroll';

import "../css/navbar.css"

import logo from "../assets/logo.svg"

import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";


function Navbar() {
    const [isOpen,setIsOpen]=useState(false)

    
    
    return (
        <>
            <nav>
                <div className="logo">
                    <img src={logo} alt='R'/>&nbsp;&nbsp;
                    <h4>ROSHAN</h4>
                </div>
                <ul className={isOpen || screen.width >"768"?"nav-links ":"none"}>
                    <li><Link to="home" activeClass="active .nav-link" spy={true} offset={-70} smooth={true} duration={100}>Home</Link></li>
                    <li><Link to="about" activeClass="active .nav-link" spy={true} offset={-70}  smooth={true} duration={100}>About</Link></li>
                    <li><Link to="skills" activeClass="active .nav-link" spy={true} smooth={true} offset={-70} duration={100}>Skills</Link></li>
                    <li><Link to="projects" activeClass="active .nav-link" spy={true} smooth={true} offset={-70} duration={100}>Projects</Link></li>
                    <li><Link to="contact" activeClass="active .nav-link"spy={true} smooth={true} offset={-70} duration={100}>Contact</Link></li>
                    
                </ul>
                <div className="nav-link-bar" onClick={()=>setIsOpen(!isOpen) }>
                    {isOpen?<RxCross1/>:<AiOutlineBars />}
               </div>

            </nav>

        </>
    )
}

export default Navbar
