import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  const [name, setName] = useState('');


  return (
    <div>
      <Card title = "Card1" name = {name} setName = {setName}/>
      <Card title = "Card1" name = {name} setName = {setName}/>
      
      <p>I am Inside Parent {name}</p>
    </div>
     
  )
}

export default App
