import React from 'react'
import {useState} from 'react'
import TodoForm from './todoForm'

function TodoList() {

    const [todos, setTodos] = useState([]);

const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
        return; 
    }
    
    const newTodos = [...todos, todo];



    setTodos(newTodos);
    console.log(...todos);

}
  return (
    <div className="todo-list">
    <h2>What's the Plan for today?</h2>
    <TodoForm onSubmit={addTodo}/>
    </div>
  )
}

export default TodoList