
import { useState } from 'react'
import './App.css'
import Form from './Components/Form/Form'
import { FormContext } from './Components/Providers/formContext'

function App() {

  const [formInput,setFormInput] = useState({
    email: '',
    password: ''
  });

  return (
    <>
      <FormContext.Provider value={{formInput,setFormInput}}>
          <Form/>
      </FormContext.Provider> 
    </>
  )
}

export default App
