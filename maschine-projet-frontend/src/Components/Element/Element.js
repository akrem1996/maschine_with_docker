import React from "react";
import {history} from '../../Redux/store'
import "./styles.css";

const Element = ({ label, key }) => (
  <div
    onClick={() => {
      history.push(label.link);
    }}
    key={key}
    className="element"
  > <div id="icon"> {label.icon} </div>
    
    <div id="title"> {label.title} </div>
  </div>
);

export default Element;
