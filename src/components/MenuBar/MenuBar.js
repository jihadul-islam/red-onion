import React from 'react';
import './MenuBar.css';

const MenuBar = (props) => {
    return (
        <div>
            <button onClick={()=>props.handleMenu('breakfast')} 
                className={`menu-toggle 
                ${props.curCategory === 'breakfast'?'text-decoration':''}`}
            ><h6>Breakfast</h6></button>
            <button onClick={()=>props.handleMenu('lunch')} 
                className={`menu-toggle 
                ${props.curCategory === 'lunch'?'text-decoration':''}`}
            ><h6>Lunch</h6></button>
            <button onClick={()=>props.handleMenu('dinner')} 
                className={`menu-toggle 
                ${props.curCategory === 'dinner'?'text-decoration':''}`}
            ><h6>Dinner</h6></button>
        </div>
    );
};

export default MenuBar;