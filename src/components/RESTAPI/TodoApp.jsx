import React from "react";

import { useState,useEffect } from "react";
import { getTodo,addTodo,UpdateTodo,deleteTodo } from "./service";

const TodoApp=()=>{
    const [todo,setTodo]=useState([]);
    const [task,setTask]=useState("");
    const [edit,setEdit]=useState(null);

    useEffect(()=>{
        getTodos();
    },[])
//load todo
    const getTodos=async()=>{
       try {
         const response=await getTodo();
        console.log(response.data)
        setTodo(response.data);
        
       } catch (error) {
        
       }
    }

//edit todo
   const handleEdit=async(todo)=>{
    setEdit(todo.id);
    setTask(todo.title);
   }


//delete todo
    const handleDelete =async(id)=>{
        const response = await deleteTodo(id);
        if (response.status===200)
        {
            alert("todo deleted successfully");
            getTodo();
        }
    }
    const handleSubmit=async()=>{
        if(!task) return alert("Please enter a task");

        if(edit){
            const response=await UpdateTodo(edit,{title:task})
            if(response.data.status ==="200")
            {
                alert("Successfully updated");
                setEdit(null);
                setTask("")
                getTodo();
            }
        }else{
            const response = await addTodo({title:task});
            if(response.data.status ==="200")
            {
                alert("Successfully Added todo");
                setEdit(null);
                setTask("")
                getTodo();

        }
    }
}
    return(
        <>
        <input type="text" value={task} onChange={(e)=>setTask(e.target.value)}/>

        <button onClick={handleSubmit}>{edit ? 'update': 'Add'}</button>

        <h2> The Todo List is</h2>
        <ul>{
            todo.map((td)=>(
                <li key={td.id}>{td.title}
                <button onClick={()=>{handleEdit(td)}}>Edit</button>
                <button onClick={()=>{handleDelete(td)}}>Delete</button>
                </li>
            ))}
        </ul>
        </>
    )
}

export default TodoApp;