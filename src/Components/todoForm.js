import React, {useState} from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('')
    
    const handleChange = (e) => {
    setInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
    e.preventDefault();


    props.onSubmit({
        id: Math.floor(Math.random() * 1000),text: input, 
    });
    
    setInput('');
   
 }


return (
    
    <form className="todo-form" onSubmit={handleSubmit}>
    
    <input 
    type= 'text' 
    placeholder="Enter Task" 
    value={input}
    onChange={handleChange}
    name='text' 
    className='todo-input'
    />
    <button className='todo-button'>Add</button>

    </form>
  )
}

export default TodoForm;