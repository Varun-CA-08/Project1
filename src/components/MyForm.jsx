import React, { useState } from "react";


const MyForm=()=>{
   const [userName,setUserName] = useState("");
   const[email,setEmail]= useState("");

   const submitData=(e)=>{
    e.preventDefault();
    if (userName.trim() ==="" || email.trim() ===""){
        alert("please fill the form correctly")
    }
    else{
        var x=prompt("Are you sure want to submit the data?(yes/no","yes");
        alert("the data is submitted successfully" +userName +"" +email);
        setUserName("");
        setEmail("");
    }
   }
   return(
    <>
    <h2> The form data</h2>
    <form action="">
        <input type="text" value ={userName} onChange={(e)=> setUserName(e.target.value)}/>
        <input type="email" value ={email} onChange={(e)=> setEmail(e.target.value)}/>
        <button onClick={submitData}> Submit Data</button>

    </form>
    </>
   )
}

export default MyForm;