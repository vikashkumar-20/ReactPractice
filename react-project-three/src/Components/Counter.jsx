import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {
    function getRandomColor(){
        let r = 150 + Math.round(100*Math.random());
        let g = 150 + Math.round(100*Math.random());
        let b = 150 + Math.round(100*Math.random());
        return `rgb(${r}, ${g}, ${b})`;

    }

    const [count, setCount] = useState(0);
    return(
        <div className='container'>
            <p id="text">You clicked {count} times</p>
            <button id="btn" onClick={() =>{setCount(count + 1) }}>Click Me</button>
        </div>
    )
}

export default Counter