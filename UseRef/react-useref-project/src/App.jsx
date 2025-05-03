import { useState, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);

  // let btnRef  = useRef();

  // function handleClick(){
  //   val.current = val.current + 1 ;
  //   console.log("Value of val: ", val.current);
  //   setCount(count+1);
  // }

  // function chnageColor(){
  //   btnRef.current.style.backgroundColor = "red";
  // }

  // useEffect(() => {
  //   console.log("It will execute on every render");
  // })

  let timerRef = useRef(null);

  let stopRef = useRef();
  
  function handleTimerStart() {
    timerRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000) 

  }
    
  function handleTimerStop(){
    clearInterval(timerRef.current);
    timerRef.current = null;
  }

  function handleTimerReset(){
    handleTimerStop();
    setTime(0);
  }


  

  return (
    <div>
        {/* <p>Count is : {count}</p>

        <button ref={btnRef} onClick = {handleClick}> 
          Increment Button
        </button>

        <br/> <br/>

        <button onClick = {chnageColor}> 
          Change color of 1st button
        </button> */}
        <p>StopWatch: {time} seconds</p>
        <button onClick = {handleTimerStart}>
          Start
        </button>

        <button  ref= {stopRef} onClick = {handleTimerStop}>
          Stop
        </button>

        <button onClick = {handleTimerReset}>
          Reset
        </button>
    </div>
  )

}

export default App
