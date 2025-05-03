import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'

function App() {

  const {
    register,
    handleSubmit,
    watch,
    formState : { errors, isSubmitting }
  } = useForm();


  async function onSubmit (data){
    await new Promise((resolve) => setTimeout(resolve, 5000))
    console.log("Submitting the data", 5000);
  }

  return(

    <form onSubmit = {handleSubmit(onSubmit)}>

      <label>First Name:</label>
      <br/>
      <input type="text" className= {errors.firstname ? 'input-error': ''} {...register('firstname', 
        {
          required: true, 
          minLength: {
            value : 3, 
            message: 'First Name Should be min 3 Character'
          }  
        })} />
        {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname.message}</p>}


      <br/><br/>
      
      <label >Last  Name:</label>
      <br/>
      <input type="text"  className= {errors.lastname ? 'input-error': ''} {...register('lastname',
        {
          required: true,
          maxLength: {
            value: 5,
            message: 'Last Name Should be max 5 Character'
            
          }
        })} />
        {errors.lastname && <p style={{ color: 'red' }}>{errors.lastname.message}</p>}

      <br/><br/>
      <input type="submit" disabled = {isSubmitting} value = {isSubmitting ? "Submitting..." : "Submit"}/>
      

    </form>

  )
  
}

export default App
