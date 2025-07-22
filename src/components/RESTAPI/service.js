import api from "./api";

export const getTodo=()=> api.get("/posts") //we can also not include a flower brazes in this...

export const addTodo =(todo)=>api.post("/posts",todo)

export const UpdateTodo=(id,todo)=>api.put(`/posts/${id}`,todo)

export const deleteTodo=(id)=>api.delete(`/posts/${id}`)