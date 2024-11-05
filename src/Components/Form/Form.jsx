import './Form.css';
import Input from '../Input/Input';
import { useContext, useRef } from 'react';
import { FormContext } from '../Providers/formContext';
import validateEmail from '../../Helper/emailValidator';
import validatePassword from '../../Helper/passwordValidator';

function Form() {

const {formInput} = useContext(FormContext);
const emailRef = useRef(null);
const passwordRef = useRef(null);

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

return(
    <div>
        New Form
        <form onSubmit={handleFormSubmit} noValidate>
            <div className="wrapper email-wrapper">
                <Input 
                    type="email" 
                    id="email-input" 
                    label="email" 
                    ref={emailRef} 
                    checkOnBlur={handleInvalidEmail}
                />
            </div> 
            <div className="wrapper password-wrapper">
                <Input 
                    type="password" 
                    id="password-input" 
                    label="password"
                    ref={passwordRef}
                    checkOnBlur={handleInvalidPassword}
                /> 
            </div>
            <button>Submit</button>
        </form>
    </div>
)

}

export default Form;