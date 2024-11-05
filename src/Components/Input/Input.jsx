import { useContext, useState } from "react";
import { FormContext } from "../Providers/formContext";

function Input({type, id, label, inputRef}) {

  const {formInput,setFormInput} = useContext(FormContext)
  const [text,setText] = useState("");
  return(
    <>
        <input
            type={type}
            id={id}
            ref={inputRef}
            value={text}
            onChange={(e) => {
                setText(e.target.value);
                setFormInput({...formInput,[label]: e.target.value})
             }
            }
        />
    </>
  );
}

export default Input;