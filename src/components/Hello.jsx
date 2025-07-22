import React from "react";
import { useState } from "react";

const Hello=()=>{
    const[isActive,setIsActive]= useState(false);  //
    return(
        <>
        <h2>The ternary operator</h2>
        <button onClick={()=>setIsActive(!isActive)}>{isActive?'ACTIVE STATE' :'INACTIVE STATE'}
        </button>
        </>
    )
}
export default Hello;