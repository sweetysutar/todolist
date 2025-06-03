import React, { createContext, useContext, useState } from 'react'
import {v4 as uuidv4} from "uuid";

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [todos, setTodos]= useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodos = () => {
      setTodos([...todos, {id: uuidv4(), text: inputValue}]);
      setInputValue('');
    }
  
    const delTodos = (idToDelete) => {
        setTodos(todos.filter((todo) => todo.id !== idToDelete))

  
}

return (

    <ToDoContext.Provider value={{todos, inputValue, setInputValue, addTodos, delTodos}}>
        {children}
    </ToDoContext.Provider>
)
}

export const useTodo =() => useContext(ToDoContext);

export default ToDoContext;