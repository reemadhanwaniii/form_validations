import { useState } from 'react';
import './Form.css';
import validatePassword from '../../Helper/passwordValidator';
import validateEmail from '../../Helper/emailValidator';
import { useRef } from 'react';
import { useEffect } from 'react';

function Form() {

const emailRef = useRef(null); //using this variable we will be able to access input element {email} in same way we do as document.getElementById



const [formValues,setFormValues] = useState({
    email : "",
    password : ""
});

const handleFormSubmit = (event) => {
        event.preventDefault();
        handleValidateEmail();
        handleValidatePassword();
}

const handleValidatePassword = () =>{
    const password = formValues.password;
    if(!validatePassword(password)){
        console.log("password doesn't contain valid parameters")
    }
}

const handleValidateEmail = () => {
    const email = formValues.email;
    if(!validateEmail(email)){
        emailRef.current.focus();
        console.log(emailRef.current.value); //now we are able to access all properties of DOM (like we do in dom api we are able to access it)
        console.log("email doesn't contain valid parameters")
        //document.getElementById('email-input').focus();
    }
}

return(
    <div>
        New Form
        <form onSubmit={handleFormSubmit}>
            <div className="wrapper email-wrapper">
                <input 
                    id="email-input"
                    type="text" 
                    value={formValues.email}
                    ref={emailRef}
                    onChange={(event) => setFormValues({...formValues,email:event.target.value})}
                />
            </div> 
            <div className="wrapper password-wrapper">
                <input 
                    id="password-input"
                    type="password" 
                    value={formValues.password}
                    onChange={(event) => setFormValues({...formValues,password:event.target.value})}
                />
            </div>
            <button>Submit</button>
        </form>
    </div>
)

}

export default Form;