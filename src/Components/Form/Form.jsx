import './Form.css';
import Input from '../Input/Input';
import { useContext, useRef } from 'react';
import { FormContext } from '../Providers/formContext';

function Form() {

const {formInput} = useContext(FormContext);
const emailRef = useRef(null);
const passwordRef = useRef(null);

const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formInput);
        //we have access to formInput that means validation can occur here
        emailRef.current.focus(); //assume form is not validated
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
                    inputRef={emailRef} //for user-defined component we can't directly passed ref here
                />
            </div> 
            <div className="wrapper password-wrapper">
                <Input 
                    type="password" 
                    id="password-input" 
                    label="password"
                    inputRef={passwordRef}
                /> 
            </div>
            <button>Submit</button>
        </form>
    </div>
)

}

export default Form;