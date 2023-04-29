import React from 'react'
import "./FooterStyle.css";

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left-footer">
                <div className="location">
                    <FaHome size={20} style={{ color:"#fff", marginRight:"2rem"}} />
              <p>Karachi, Sindh</p>
              <p>Pakistan</p>
                
                </div>


                   <div className='phone'>
                    
                    <FaPhone size={20} style={{ color:"#fff", marginRight:"2rem"}}/>
                    <p>+923483016628</p>

                  </div> 
                  <div className='email'>
                    <FaMailBulk size={20} style={{ color:"#fff", marginRight:"2rem"}} /> 
                    <p>blackowlabc@gmail.com</p>
                  </div>
            </div>

            <div className="right-footer">
            <h4>About the company</h4>
            <p>I am Abdul Qadeer A Junior Web Developre I am Struggling hard to learn new technologies and skill s </p>

            
            <div className="social">

            <Link to="https://www.facebook.com/">
            <FaFacebook size={30} style={{ color:"#fff", marginRight:"1rem"}} />

            </Link>    
            <Link to="https://twitter.com/">
            <FaTwitter size={30} style={{ color:"#fff", marginRight:"1rem"}} />
            </Link>

            <Link to="https://www.linkedin.com/in/abdulqadeer48/">
            <FaLinkedin size={30} style={{ color:"#fff", marginRight:"1rem"}} />

            </Link>

            <Link to="https://www.instagram.com/">
            <FaInstagram size={30} style={{ color:"#fff", marginRight:"1rem"}} />

            </Link>
          
            </div>

            </div>
        </div>
    </div>
  )
}

export default Footer