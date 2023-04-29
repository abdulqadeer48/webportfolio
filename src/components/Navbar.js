import "./NavbarStyle.css"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"

// import { useState } from 'react'

const Navbar = () => {

    const [hamBurgerBtn,setHamBurgerBtn] = useState(false)
    const handleHamBurger = () =>{
        setHamBurgerBtn(!hamBurgerBtn)
    }

    const [color, setColor] = useState(false);
    const navbarBackroundColorChange = () =>{
        if (window.scrollY >= 1){
            setColor(true);
            }else(
                setColor(false)
            );
    }

window.addEventListener("scroll", navbarBackroundColorChange)


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="/">
            <h1>My PortFolio</h1>
        </Link>
        <ul className= {hamBurgerBtn ? "nav-items active" : "nav-items"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">projects</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
        </ul>
        <div className='hamburger' onClick={handleHamBurger}>

            {hamBurgerBtn ? (<FaTimes size={20} style={{color:"white"}}/>) 
            : 
            (<FaBars size={20} style={{color:"white"}}/>)}

            
            
        </div>
    </div>
  )
}

export default Navbar