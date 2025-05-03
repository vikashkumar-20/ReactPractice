import React, { useState } from 'react';
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {

  const  [isLoggedIn, setLoggedIn] = useState(true);
   
  // Conditional Rendering in React using if-else

  // if(isLoggedIn)
  // {
  //   return (<LogoutBtn/>)
  // }
  // else
  // {
  //   return (<LoginBtn />)
  // }



  // // // Conditional Rendering in React using ternary operator
  // return(
  //   <div>
  //     {isLoggedIn ? <LogoutBtn /> :<LoginBtn />}
  //   </div>
  // )


  return (
    <div>
      <h1>Welcome Everyone to codehelp Web Dev Course</h1>
      <div>
        {isLoggedIn && <LogoutBtn/>}
      </div>
    </div>
  )
  
}

export default App
