import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import {connect} from "react-redux";
import { fetchLogout } from '../../Redux/Actions/authAction';



import './styles.css';

class NavBar extends React.Component {

    handleLogout = () =>{
        localStorage.clear();
        this.props.logOut();
    }

    render (){
        const username = localStorage.getItem('username')
        if ( this.props.name === "authontification"){
            return (
                <div className='container'> 
                    <div> Authontification Screen </div>
                     <div className="container-item">
                        <Link className="nav-link" to={'/'}> Login </Link>
                        <Link className="nav-link" to={'/signup'}> Sign up </Link>
                    </div>               
                </div>
            )} else {
                return ( 
                    <div className='container'> 
                        <div> {`Hello  ${username}`} </div>
                        <Link className="nav-link" to={"/"} onClick={this.handleLogout}> Logout </Link>
                    </div>
                )
            }
    }   
}

const mapDispatchToProps = dispatch => {
    return {
      logOut: () => dispatch(fetchLogout()),
    }
  }
  
  const mapStateToProps = (state) => {
    return {
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps) (withRouter(NavBar));
