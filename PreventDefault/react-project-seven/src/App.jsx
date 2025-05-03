
import './App.css'

function App() {

  function handleClick () {
    alert("Button Clicked");
  }

  function onMouseOver () 
  {
    alert("Hovering on Paragraph");
    
  }

  function handleInputChange(e) {
    console.log("Value till now: ",e.target.value);
  }

  function handleSubmitBtn(e){
    e.preventDefault();
    alert("Form Submitted Sucessfully");

  }
  
  return (
   <div>


    <button onClick = {() => {alert("Button Clicked")}}>Click Me</button>

    <form onSubmit = {handleSubmitBtn}>
      <input  onChange = {handleInputChange} type="text" />
      <button type="submit">Submit</button>
    </form> 



    <p onMouseOver = { onMouseOver} >I am a para</p>
    <button onClick={ handleClick }>Click me</button>
   </div>
  )
}

export default App
