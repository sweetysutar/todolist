import React from 'react'
import { useTodo } from '../contexts/ToDoContext'

const ToDoInput = () => {
  const { inputValue, setInputValue, addTodos } = useTodo();
  return (
    <span>
            <input 
            type="text"
                name="title"
                className="border rounded w-100 py-2 px-3 mb-2 focus:outline-violet-500 text-violet-950 focus:shadow-outline"
                placeholder="eg. Exercise"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}></input>
            <button
            onClick={addTodos}
                className="bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-full w-10 focus:outline-none focus:shadow-outline"
                type="submit">
                +
              </button>
          </span>
  )
}

export default ToDoInput