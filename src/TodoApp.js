import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export const TodoContext = React.createContext();

function TodoApp() {
const[todos,setTodos] = useState([]);
// const[editIndex,setEditIndex] = useState(-1);

const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider value={{todos, addTodo, removeTodo}}>
        <div>
        <p className='display-3'>Todo-List</p>
        <TodoForm/>
        <TodoList/>
        </div>
    </TodoContext.Provider>
  )
}

export default TodoApp