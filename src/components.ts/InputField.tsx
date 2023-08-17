import React from 'react'
import "./InputField.css"
import {useRef} from "react"


interface Props  {
  todo:string,
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent) => void;
}

function InputField({todo,setTodo,handleAdd}:Props) {
    const  inputRef=useRef<HTMLInputElement>(null)


  return (
    <form className="input" onSubmit={handleAdd}>
        <input value={todo} onChange={(e)=>setTodo(e.target.value)}
        type="text" placeholder="Enter a task" className="input_box"/>
            <button className="input_submit" type="submit">Go</button>
    </form>
  )
}

export default InputField