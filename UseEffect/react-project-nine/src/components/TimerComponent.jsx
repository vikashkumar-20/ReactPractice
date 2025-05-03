import React, { useEffect } from 'react';
import { useState } from 'react';

function TimerComponent () {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const intervalID = setInterval( () => {
        console.log("Timer Started");
        setSeconds(prevSeconds => prevSeconds + 1 );
      },1000);

      return () => {
        console.log("Time to stop");
        clearInterval(intervalID);
        
    };
}, []); 
    

    return(
        <div>
            <h1>Seconds : {seconds}</h1>
        </div>
    )
}

export default TimerComponent