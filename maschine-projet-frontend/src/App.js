
import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';
import {connect} from "react-redux";
import {history} from './Redux/store'
import socketIOClient from "socket.io-client";
import { fetchLiveMachine , getMaschine} from "./Redux/Actions/machineAction";

import './App.css';

import ShowClassification from "./Components/ShowClassification/ShowClassification";
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import ShowState from './Components/ShowState/ShowState';

class App extends React.Component {
  
  componentDidMount(){
    const ENDPOINT = "http://127.0.0.1:8000";
    const socket = socketIOClient(ENDPOINT);
    socket.on("sendMessage", data => {
      this.props.getLiveMachine(data)
    });
   // this.props.getMaschineAction();
  } 

  render(){
    return (
      <div className="App">
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path= "/" component={() => <Login/>}/> 
            <Route  exact path="/signup" component={() =>  <SignUp/>}/>
            <Route exact path="/ShowClassification" component={() => <ShowClassification /> } />
            <Route exact path="/ShowState" component={() => <ShowState /> } />
          </Switch> 
        </ConnectedRouter> 
      </div>
    );
  } 
}

const mapDispatchToProps = dispatch => {
  return {
    //getMaschineAction: () => dispatch(getMaschine()),
    getLiveMachine : (data) => dispatch(fetchLiveMachine(data))
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps) (App);


