import React from "react";
import './heading.css'
const Showhead=(props)=>{
  return <React.Fragment>
    
    <div className="layout cc">
  
     <div className="listrole2 ">{props.role}</div>
     <div className="listrole2 ">{props.access}</div>
     <div className="listrole1">{props.num}</div>
     <div className="listrole1">{props.time}</div>
     {/* <div className="listrole1"></div> */}
    </div>

  </React.Fragment>
};

export default Showhead;
