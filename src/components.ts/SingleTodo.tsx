import React from 'react'
import {Todo} from '../model'
import {useState} from "react"


type Props= {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props>=({todo,setTodos,todos,})=> {
  const [edit,setEdit] = useState<boolean>(false)
  const [editTodo,setEditTodo] =useState<string>(todo.todo)

const handleDone=(e:React.FormEvent,id:number)=>{
      e.preventDefault()
        setTodos(todos.map((todo)=>todo.id === id? {...todo,isDone:!todo.isDone}:todo))
}
const handleDelete=(e:React.FormEvent,id:number)=>{
  e.preventDefault();
  setTodos(todos.filter((todo)=>{
    return todo.id !== id
  }))
}
const handleEdit=(e:React.FormEvent,id:number)=>{
  e.preventDefault()
  setTodos(todos.map((todo)=>(
    todo.id == id ? {...todo, todo:editTodo}:todo
  )))
  setEdit(false)

}

  return (
      <form className="todos_single" onSubmit={(e)=>handleEdit(e,todo.id)}>
    <div>
      
      {
        edit ? (<input value={editTodo} onChange={(e)=> setEditTodo(e.target.value)}/>):
        todo.isDone ? (<s>{todo.todo}</s>):(<span onClick={()=>{if(!edit && !todo.isDone){setEdit(!edit)}}}>{todo.todo}</span>)
      }
            <span>{todo.todo}</span>
            <div>
              <button type="submit" onClick={(e)=>handleEdit(e,todo.id)}>Submit</button>
              <button onClick={(e)=>handleDone(e,todo.id)}>Remove</button>
              <button onClick={(e)=>handleDelete(e,todo.id)}>Delete</button>

            </div>
    </div>
      </form>
  )
}

export default SingleTodo