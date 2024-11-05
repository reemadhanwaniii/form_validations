import './Form.css';
import Input from '../Input/Input';
import { useContext, useRef, useState } from 'react';
import { FormContext } from '../Providers/formContext';
import validateEmail from '../../Helper/emailValidator';
import validatePassword from '../../Helper/passwordValidator';

function Form() {


const {formInput} = useContext(FormContext);
const emailRef = useRef(null);
const passwordRef = useRef(null);
const usernameRef = useRef(null);
const addressRef = useRef(null);
const [step,setStep] = useState(1);

const handleFormSubmit = (event) => {
        event.preventDefault();
        handleInvalidEmail();
        handleInvalidPassword();
}

const handleInvalidEmail = () => {
    if(!validateEmail(formInput.email)){
        emailRef.current.setInvalid();
        emailRef.current.shake();
    }
}

const handleInvalidPassword = () => {
    if(!validatePassword(formInput.password)){
        passwordRef.current.setInvalid();
        passwordRef.current.shake();
    }
}

if(step == 1){
    return(
        <div>
            New Form
            <form onSubmit={handleFormSubmit} noValidate>
                <div className="wrapper email-wrapper">
                    <Input 
                        type="email" 
                        id="email-input" 
                        label="email"
                        placeholder = "email" 
                        ref={emailRef} 
                        key={1}
                        checkOnBlur={handleInvalidEmail}
                    />
                </div> 
                <div className="wrapper password-wrapper">
                    <Input 
                        type="password" 
                        id="password-input" 
                        label="password"
                        placeholder="password"
                        ref={passwordRef}
                        key={2}
                        checkOnBlur={handleInvalidPassword}
                    /> 
                </div>
                <button>Submit</button>
                <button onClick={()=>{
                    setStep(step+1);
                }}>Next</button>
            </form>
        </div>
    )
} else if(step == 2) {
    return(
        <div>
            New Form
            <form  noValidate>
                <div className="wrapper email-wrapper">
                    <Input 
                        type="text" 
                        id="username-input" 
                        label="username" 
                        placeholder="username"
                        ref={usernameRef} 
                        key={3}
                        checkOnBlur={() => console.log("empty")} 
                    />
                </div> 
                <button onClick={() => {
                    setStep(step+1);
                }}>Next</button>
                <button onClick={() => {
                    setStep(step-1);
                }}>Previous</button>
            </form>
        </div>
    )
} else if(step == 3) {
    return(
        <div>
            New Form
            <form onSubmit={handleFormSubmit} noValidate>
                
                <div className="wrapper address-wrapper">
                    <Input 
                        type="text" 
                        id="address-input" 
                        label="address"
                        placeholder="address"
                        ref={addressRef}
                        key={4}
                        checkOnBlur={() => console.log("empty")}
                    /> 
                </div>
                <button onClick={() => {
                    setStep(1);
                }}>Next</button>
                <button onClick={() => {
                    setStep(step-1);
                }}>Previous</button>
            </form>
        </div>
    )
}



}

export default Form;