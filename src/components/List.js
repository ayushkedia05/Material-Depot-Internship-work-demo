import React from "react";
import './list.css'
const ShowList=(props)=>{
    
  return <React.Fragment>
    
    <div className="layout">
    {!props.flag && <div className="listcircle"></div>}
     <div className="listrole">{props.role}</div>
     <div className="accesslevel">{props.access}</div>
     <div className="listnum">{props.num}</div>
     <div className="lastupdate">{props.time}</div>
     <div className="oval"></div>
    </div>

  </React.Fragment>
};

export default ShowList;
