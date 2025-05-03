import { useState } from 'react'
import './App.css'
import ChangeColor from './components/ChangeColor';

function App() {

  const [count, setCount] = useState(0);
  
  function handleClickOutside(){
    setCount(count + 1);
  }

  function getRandomColor(){
    let r = 150 + Math.round(100*Math.random());
    let g = 150 + Math.round(100*Math.random());
    let b = 150 + Math.round(100*Math.random());
    return`rgb(${r},${g},${b})`;
  }

  function handleChangeColor (e){
    const container = document.querySelector('.container');
    container.style.backgroundColor = getRandomColor();
  }


  return(
    <div className='container' onClick ={handleClickOutside}>
      <ChangeColor onChangeColor = {handleChangeColor}></ChangeColor>
      <p>Clicks on the page: {count} </p>
    </div>
  )

}

export default App
