import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Logger = () => {
    const [count, setCount] = useState(0);

    useEffect (() => {
        console.log("Component render and count changed", count);
    })


    function handleClick(){
        setCount(count+1);
    }

    
    return(
        <div>
            <p>Count is: {count}</p>
            <button onClick = {handleClick}>
            Click Me
            </button>
            
        </div>
    )
}

export default Logger