import React, { useState } from "react";
import { connect } from "react-redux";
import { registerAction } from "../../Redux/Actions/authAction";

import "./styles.css";

import NavBar from "../NavBar/NavBar";


function SignUp (props){
    const { user, register} = props;
    const[userState, setUserState] = useState({});

    function handleNameChange (event){
        const name = event.target.value;
        setUserState({ ...userState, ...{ name } });
    }

    function handlePasswordChange (event){
        const password = event.target.value;
        setUserState({ ...userState, ...{ password } });
    }

    function handleSubmit(event){
        event.preventDefault();
        register(userState)
    }

        return (   
            <div>
                <NavBar name="authontification"/>
                <div className="Signup-wrapper">
                <form onSubmit={handleSubmit}>
                    <h3>Sign up</h3>
                    <label> User Name </label>
                    <input type="text" placeholder="User Name"  onChange={handleNameChange}/>
                    <label> Password </label>
                    <input type="password" placeholder="Password"   onChange={handlePasswordChange}/>
                    <button type="submit" className="button"> Sign up </button>
                    {props.isRegistered && <p style={{ color: 'green' }}> User Registration Successful! Please Login </p>}
                </form>  
            </div>
            </div> 
        )
    
}

const mapDispatchToProps = dispatch => {
    return {
        register: (userState) => dispatch(registerAction(userState)) 
    }
  }
  
const mapStateToProps = (state) => {
    return {
        isRegistered: state.signup.isRegistered
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);




