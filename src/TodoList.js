import React, {useContext, useState} from 'react';
import './TodoList.css'
import { TodoContext } from './TodoApp';
import TodoEdit from './TodoEdit';

function TodoList() {
    const { todos, removeTodo } = useContext(TodoContext);
    const[editIndex,setEditIndex] = useState(-1);

    const startEditing = (index) => {
        setEditIndex(index);
      };
    
      const stopEditing = () => {
        setEditIndex(-1);
      };

  return (
    <div className='m-4'>
        <ul className='list-group list-group-flush '>
        {todos.map((todo, index) => (
            <li className='list float-start' key={index}>
    <input class="form-check-input me-2" type="checkbox"  id="firstCheckbox"></input>
    <label class="form-check-label" for="firstCheckbox"></label>
                 {editIndex === index ? (
            <TodoEdit index={index} stopEditing={stopEditing} />
          ) : (
            <>
                {todo.text}
                <button className='btn btn-dark m-2 float-end' onClick={() => removeTodo(index)}>Remove</button>
                <button className='btn btn-dark m-2 float-end' onClick={() => startEditing(index)}>Edit</button>
                </>
          )}
            </li>
        ))}
        </ul>
    </div>
  )
}

export default TodoList