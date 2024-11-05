import React, { useEffect, useImperativeHandle, useRef } from "react";
import { useContext, useState } from "react";
import { FormContext } from "../Providers/formContext";
import './Input.css'

const Input = React.forwardRef(({type, id, label}, ref) => {

  const {formInput,setFormInput} = useContext(FormContext)
  const [isValid,setISValid] = useState(true);
  const [shake,setShake] = useState(false);
  const [text,setText] = useState("");

 //introduce a local Ref // local Ref means local to a component
 const localRef = useRef(null);

 useEffect(()=>{
    setISValid(true);
    setShake(false);
 },[text]);
 
 useImperativeHandle(ref,()=>
    {
        //console.log(localRef)
        return {
            focus: () => localRef.current.focus(),
            setInvalid: () => setISValid(false),
            shake: () => setShake(true),
        }
    },[]);

  return(
    <>
        <input 
            className={`${(!isValid)?"error-input":""} ${(shake)? 'shake' : ''}`}
            type={type}
            id={id}
            ref={localRef}
            value={text}
            onChange={(e) => {
                setText(e.target.value);
                setFormInput({...formInput,[label]: e.target.value})
             }
            }
        />
        <span><br/>{ (!isValid)? `${label} is invalid` : ""}</span>
    </>
  );
});

export default Input;