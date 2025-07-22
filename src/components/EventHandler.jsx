import React from "react";


const EventHandler=()=>{
    const submitData=()=>{
        alert("The named event handler is called");
    }
    const greet =(name)=>{
        alert("the name is"+name);
    }
    return(
        <>
        <h2> Named Event Handler</h2>
        <button onClick={submitData}>Submit Name EventHandler</button>
        <h2>Inline Event Handler</h2>
        <button onClick={()=>{alert("This is event from inline")}}>Inline Event</button>

        <h2>Passing Argument in functions</h2>
        <button onClick={()=>greet("Hello")}>Click Me</button>

        </>
    )
}

export default EventHandler;