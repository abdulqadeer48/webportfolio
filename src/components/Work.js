
import DynamicCard from "./DynamicCard";
import WorkCardData from "./WorkCardData"
import React from "react";


const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Porjects</h1>
      <div className="project-container">
        {WorkCardData.map((val,ind) => {
            return(
                <DynamicCard  
                key={ind} 
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })}
      </div>
    </div>
  );
};

export default Work;
