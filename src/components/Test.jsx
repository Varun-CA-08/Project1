import React from "react";
import { useState } from "react";


// const Test=()=>{
//     const[x,setX]=useState(Virat)
//     return(
//         <>
//           <h2>the name of the cricketer is{x}</h2>
//         </>
//     )
// }

const Test=props=>{
    const[x,setX]=useState(['virat','rohit','dhoni']);
    const[count,setCount]=useState(0)
    const[name,setName]=useState(""); //useState 
    function submitData(e){
        console.log(e.target.value);
        console.log("The name is:",name);
    }

    return(
        <>
        <h2>The name of the Criketer is:{x}</h2>
        <h3> Welcome to {props.name}!</h3>

        <h2>The count Value is:{count}</h2>

        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>

        <h3>The value of name is :{name} </h3>
        <input 
            type="text" 
            value={name} 
            onChange={(e) =>setName(e.target.value)}
 />
        </>
    )
}
export default Test;