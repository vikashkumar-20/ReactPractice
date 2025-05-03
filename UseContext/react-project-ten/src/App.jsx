import { createContext, useState } from 'react';
import ChildA from './components/ChildA';
import './App.css' ;

// const UserContext = createContext();
const ThemeContext = createContext();

function App() {

  const [theme, setTheme] = useState('light');

  return(
    
    <ThemeContext.Provider value = {{theme, setTheme}}>
      <div id='container' style = {{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA />
      </div>
    </ThemeContext.Provider>
    
    
  );
 
}

export default App 
// export {UserContext}
export {ThemeContext}
