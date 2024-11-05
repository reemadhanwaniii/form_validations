import './Form.css';
import Input from '../Input/Input';
import { useContext } from 'react';
import { FormContext } from '../Providers/formContext';

function Form() {

const {formInput} = useContext(FormContext);


const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formInput);
}



return(
    <div>
        New Form
        <form onSubmit={handleFormSubmit}>
            <div className="wrapper email-wrapper">
                <Input type="text" id="email-input" label="email"/>
            </div> 
            <div className="wrapper password-wrapper">
                <Input type="password" id="password-input" label="password"/> 
            </div>
            <button>Submit</button>
        </form>
    </div>
)

}

export default Form;