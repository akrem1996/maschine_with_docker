import React, { useState } from "react";
import { connect } from "react-redux";
import { loginAction } from "../../Redux/Actions/authAction";

import "./styles.css";

import NavBar from "../NavBar/NavBar";

function Login (props) {
    const { user, login} = props;
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
        login(userState)
    }

    return (  
        <div>
            <NavBar name="authontification"/>  
            <div className="Login-wrapper">
                <h3>Login </h3>
                <label> User Name </label>
                <input type="text" placeholder="User Name" onChange={handleNameChange}/>
                <label> Password </label>
                <input type="password" placeholder="Password" onChange={handlePasswordChange}/>
                <button type="submit" className="button" onClick = {(e) => handleSubmit(e)}> Login </button>
                {props.error && <p style={{ color: 'red' }}> check your Username and Password Please </p>}
            </div>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        login: (userState) => dispatch(loginAction(userState)) 
    }
}
  
const mapStateToProps = (state) => { 
    console.log(state.signup.error)
    return {
        username: state.signup.username,
        error: state.signup.error
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);

