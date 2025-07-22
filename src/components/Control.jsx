import React from "react";
import { useState,useRef } from "react";
import { Placeholder } from "react-bootstrap";

const Control =()=>{
    const[inputValue,setInputValue]=useState('')
    const inputRef=useRef()
    
    const handleUnControlledInput=()=>{
        alert(`${inputRef.current.value}`);
    };
    return(
        <> 
        <h2> Controlled Component </h2>
        <h2> The value of Inputref is: {inputValue}</h2>
        <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            Placeholder="Its a controled component"/>

        <h2> Uncontrolled Component </h2>
        <input ref={inputRef}/>
        <button on onClick={handleUnControlledInput}> Uncontrolled Component</button>
        </>
    )
}

export default Control;