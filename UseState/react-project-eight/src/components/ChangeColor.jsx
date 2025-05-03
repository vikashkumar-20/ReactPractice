import React from 'react';
import './ChangeColor.css'


function ChangeColor( {onChangeColor} ){

    return(
        <button onClick = {e => {
            e.stopPropagation();
            onChangeColor();
            }}> 
            Change Color
        </button>
    )
}

export default ChangeColor