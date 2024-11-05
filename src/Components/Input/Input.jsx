import React from "react";
import { useContext, useState } from "react";
import { FormContext } from "../Providers/formContext";

const Input = React.forwardRef(({type, id, label}, ref) => {

  const {formInput,setFormInput} = useContext(FormContext)
  const [text,setText] = useState("");
  return(
    <>
        <input
            type={type}
            id={id}
            ref={ref}
            value={text}
            onChange={(e) => {
                setText(e.target.value);
                setFormInput({...formInput,[label]: e.target.value})
             }
            }
        />
    </>
  );
});

export default Input;