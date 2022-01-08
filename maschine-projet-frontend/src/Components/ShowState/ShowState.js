import React from 'react';

import './styles.css';

import NavBar from "../NavBar/NavBar";
import Menu from "../Menu/Menu"
import StateList from "../StateList/StateList";

const ShowState =()=><div> 
    <NavBar />
        <div className='wrapper'>
            <Menu />
            <StateList />                     
        </div>
    </div>;

export default ShowState;