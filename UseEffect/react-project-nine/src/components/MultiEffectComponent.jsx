import React from 'react';
import {useState, useEffect} from 'react';

function MultiEffectComponent(){
    const [count, setCount] = useState (0);
    const [seconds, setSeconds] = useState(0);

    useEffect( () => {
        console.log("Count Changed:",count)

    }, [count]);

    useEffect( () => {
        console.log("SetInterval Start");
        const timeInterval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        },1000)

        return (() => {
            console.log("Time to stop");
            clearInterval(timeInterval);
        })
        

    }, []);

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick = {() => setCount(count + 1)}>Increment Count</button>
            <p>Seconds: {seconds} </p>
        </div>
    )
}

export default MultiEffectComponent