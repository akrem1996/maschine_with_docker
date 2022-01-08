import React from "react";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import MachineItem from "../MachineItem/MachineItem";

import "./styles.css";


class ClassificationList extends React.Component {

  render() {
    return (
      <div className="machine-container">
      <div >
        <div className="machine-bar-title-actif">
          Maschine Clasifications
        </div>
          <div>
            {this.props.maschineList.map((machine, index) => (
              <div className="machine-section"><MachineItem type="classification" machine={machine}/></div>
            ))}
          </div>
      </div>
     </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const mapStateToProps = (state) => {
  return {
    maschineList: state.machines.machine,
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (withRouter(ClassificationList));
