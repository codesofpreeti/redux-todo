import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToDo } from '../redux/features/slice'
const AddTodo = () => {
    const dispatch= useDispatch()
    const [input,setInput]= useState("")
    const toDoHandler=(e)=>{
        e.preventDefault();
        dispatch(addToDo(input));
        setInput('');
    }
    
  return (
    <div>
        <form onSubmit={toDoHandler}>
            <input type="text" value={input} placeholder='Enter a task' onChange={(e)=>setInput(e.target.value)}/>
            <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodo