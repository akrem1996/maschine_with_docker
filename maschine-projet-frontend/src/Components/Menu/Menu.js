import React from 'react';
import './styles.css';
import Element from '../Element/Element';

import HomeIcon from '@material-ui/icons/Home';
import VisibilityIcon from '@material-ui/icons/Visibility';

const menuElement= [
        {
                title:'Show Classification',
                link: '/ShowClassification',
                icon: <HomeIcon />
        } ,
        {
                title:'Show State',
                link: '/ShowState',
                icon: <VisibilityIcon />
        }
]

const Menu =({})=>(
<div className='container-menu'>
        {menuElement.map((element,index) =>  <Element label ={element} key={index}/>)} 
</div>);

export default Menu;
