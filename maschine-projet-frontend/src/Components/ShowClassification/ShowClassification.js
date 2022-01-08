import React from 'react';

import './styles.css';

import NavBar from "../NavBar/NavBar";
import Menu from "../Menu/Menu"
import ClassificationList from "../ClassificationList/ClassificationList"

const ShowClassification =()=><div> 
    <NavBar />
        <div className='wrapper'>
            <Menu />
            <ClassificationList />                   
        </div>
    </div>;

export default ShowClassification;