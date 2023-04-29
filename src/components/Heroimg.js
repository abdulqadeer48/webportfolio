import "./HeroimgStyle.css"
import IntroImage from "../assets/girlusingLT.jpg"
import { Link } from "react-router-dom"
function Heroimg() {
  return (

    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImage} alt="IntroImage"/>
        </div>

        <div className="content">
            <p className="fw-bolder">HI, I AM ABDUL QADEER.</p>
            <h1 className="fw-bolder">A Junior React Developer.</h1>

            <div>
                <Link to="/projects" className="btn-2">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>

        </div>
    </div>
  )
}

export default Heroimg