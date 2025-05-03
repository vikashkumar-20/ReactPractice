import './App.css'
import Logger from './components/Logger'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
import ResizeComponent from './components/ResizeComponent'
import MultiEffectComponent from './components/MultiEffectComponent'


function App() {
  // const [count, setCount] = useState(0);
  // const [total, setTotal] = useState(1);

  

  // Variation 1 of useEffect

  // useEffect(() => {
  //   alert("I will update on ervery render");
  
  // })

  
  // // Variation 2 of useEffect thats render on only first render

  // useEffect(() => {
  //   alert("I will update on only first render");
  // }, [])


    // // Variation 3

    // useEffect (() => {
    //   alert("When you click on count i will render");
    // }, [count])



    // // Variation 3 Multiple Dependencies

    // useEffect (() => {
    //   alert("When you click on count and total i will render");
    // }, [count, total])


    // // Variation 5, Clean-up function

    // useEffect (() => {
    //   alert("Count is Updated");
      
    //   return () => {
    //     alert("Count is Mounted from UI");
    //   }

    // }, [count])

  // function handleClick() {
  //   setCount(count+1);
  // }

  // function handleClickTotal(){
  //   setTotal(total+1);
  // }

  return(
    <MultiEffectComponent />
    // <ResizeComponent/ >
    // <DataFetcher />
    // <Logger />
    // <TimerComponent />
    // <div>
    //   {/* <button onClick = {handleClick}>Click Me</button>
    //   <br />
    //   <p>Update Count: {count}</p>


    //   <br />
    //   <br />
    //   <button onClick = {handleClickTotal}>Get Total</button>
    //   <br />
    //   <p> Total Count is: {total}</p> */}
    // </div>
  )
}

export default App
