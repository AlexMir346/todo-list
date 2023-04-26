import { useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { addTodo } from "../store/todoSlice";
import TodoFrom from "../todoForm/TodoForm";
import TodoList from "../todoList/TodoList";

import './App.css'

function App() {
 const [text, setText] = useState('')
 const [error, setError] = useState(false)
 const dispatch = useAppDispatch();

 const handleAction = () => {
  if(text.trim().length){
      dispatch(addTodo(text))
      setError(false)
      setText('')
  } else {
    setError(true)
  }
}

 return (
  <div className="App">
    <div className="heading">
        <h1 className="header">Todo List</h1>
      </div>
    <TodoFrom value={text} updateText={setText} handleAction={handleAction}/>
     {error && <p className="error-message">There is nothing to add</p>}
    <TodoList/>
  </div>
 )
}

export default App;