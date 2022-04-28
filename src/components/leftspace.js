import React from "react";
import "./leftspace.css";

import Addbutton from "./button";
const Leftspace = () => {
  return (
    <React.Fragment>
      <div className="size">
        <div className="leftside">
          <div className="box">
            <div className="head">
              <div>
                {" "}
                <span className="logo"></span>
              </div>
              <div className="classmanager"> Classroom Manager</div>
            </div>
            <div className="list">
              <ul>
                <li className="listname">
                  <Addbutton name="Projects"></Addbutton>
                </li>

                <li className="listname">
                  <Addbutton name="Classroom"></Addbutton>
                </li>

                <li className="listname">
                  <Addbutton name="Permissions"></Addbutton>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Leftspace;
