import React, { useState,useContext } from 'react'
import { TodoContext } from './TodoApp'


function TodoForm() {
  const {addTodo} = useContext(TodoContext)
  const [text,setText] = useState('');

  const handle = (e) =>{
      e.preventDefault();
      if(text.trim() !== ''){
        addTodo(text);
        setText('');
      }
  }


  return (
    <div>

   <form onSubmit={handle}>
    <div input-group mb-3 >
    <input className="form-control m-5 w-75 d-inline" placeholder="Type Task" aria-label="Type Task" aria-describedby="button-addon2"
     type='text' value={text} onChange = {(e)=> setText(e.target.value)} ></input>
    <button className='btn btn-dark ' id="button-addon2">Add Task</button>
    </div>
   </form>

    </div>
  )
}

export default TodoForm