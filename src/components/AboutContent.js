import "./AboutContentStyle.css"
import { Link } from "react-router-dom"
import React from 'react'
import AboutImg1 from "../assets/about1.jpg"

import AboutImg2 from "../assets/about2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1 className="fw-bolder">- Who Am I ? -</h1>
            <p className="fs-4">I am a junior front-end developer.I am practising daily to boost up my coding skills.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container"> 
            <div className="img-stack top">
                <img src={AboutImg1} alt="true" className="img"></img>
            </div>

            <div className="img-stack bottom">
                <img src={AboutImg2} alt="true" className="img"></img>
            </div>

        
            
            </div>

        </div>
    </div>
  )
}

export default AboutContent