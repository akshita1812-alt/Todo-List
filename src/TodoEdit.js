import React, { useContext, useState } from 'react'
import { TodoContext } from './TodoApp';

function TodoEdit({index, stopEditing}) {
const {todos} = useContext(TodoContext);
const [editedText,setEditedText] = useState(todos[index].text);

const handleEdit = ()=>{
    if(editedText.trim() !== ''){
        todos[index].text = editedText;
        stopEditing();
    }
} 
  return (
    <div>
        <input className="form-control m-5 w-75 d-inline" placeholder="Type Task" aria-label="Type Task"
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
      <button className='btn btn-dark m-2' onClick={handleEdit}>Save</button>
      <button className='btn btn-dark m-2' onClick={stopEditing}>Cancel</button>
    </div>
  )
}

export default TodoEdit