import Card from './components/Card';
import React, {useState} from 'react';
function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
      setCount(count + 1);
  }
 

  return (
   <div>
    <Card increaseCounter={handleClick} text="Click ME">
    <h1>{count}</h1>
    </Card>

    
   </div>
  )
}

export default App
