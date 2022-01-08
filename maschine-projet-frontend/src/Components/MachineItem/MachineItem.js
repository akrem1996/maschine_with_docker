import React from "react";
import "./styles.css";

const MachineItem = ({ type, machine }) => {
  return (

    <div className="card-container">
      {type === "state" ?  
      <div>
        <span> modelName: {machine.modelName} </span><br />
        <span> modelDisplayName: {machine.modelDisplayName} </span><br />
        <span> state: {machine.state} </span><br />
        <img src={machine.icon} width="80px" heigth="80px"/>
      </div>
      :
      <div>
        <span> modelName: {machine.modelName} </span><br />
        <span> classification: {machine.classification} </span><br />
        <span> classProbability: {machine.classProbability} </span><br />
        <span> classIndex: {machine.classIndex} </span>
      </div>
      }
    </div>
  );
};

export default MachineItem;
