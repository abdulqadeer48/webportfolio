import "./DynamicCardStyle.css";
// import ProImg1 from "../assets/girlusingLT.jpg";
import React from "react";
import { NavLink } from "react-router-dom";

const DynamicCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="image" />
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
      <p>
       {props.text}
      </p>
      <div className="proj-btns">
        <NavLink to={props.view}className="btn mx-2">
          View
        </NavLink>

        <NavLink to="url.com" className="btn">
          Source
        </NavLink>
      </div>
    </div>
  </div>
  );
};

export default DynamicCard;
