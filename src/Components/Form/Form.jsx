import { useEffect, useRef, useState } from 'react';
import './Form.css';
import validatePassword from '../../Helper/passwordValidator';
import validateEmail from '../../Helper/emailValidator';

function Form() {
    
const exampleRef = useRef(0);

const [count,setCount] = useState(0);

useEffect(()=>{
    console.log(exampleRef);
},[count]);

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
        console.log("email doesn't contain valid parameters")
        //document.getElementById('email-input').focus();
    }
}

return(
    <div>
        New Form

        Count : {count}
        <br/>
        ExampleRef : {exampleRef.current}
        <br/>
        <button onClick={() => setCount(count+1)}>Update Count</button>
        <br/>
        <button onClick={() => exampleRef.current++}>Update Ref</button>
        <form onSubmit={handleFormSubmit}>
            <div className="wrapper email-wrapper">
                <input 
                    id="email-input"
                    type="text" 
                    value={formValues.email}
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