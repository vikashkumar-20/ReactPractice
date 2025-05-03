import React from 'react';
import './Card.css'

const Card = (props) => {
   
    return(
        <div className='container'>
            {props.children}
            <button id="btn" onClick={props.increaseCounter}> 
                {props.text}
            </button>
        </div>
    );
};

export default Card