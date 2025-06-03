import React from 'react'
import { useTodo } from '../contexts/ToDoContext'

const ToDoItem = ({todo}) => {
  const { delTodos } = useTodo();

  return (
    <li>
        {todo.text}
        <button className="bg-violet-400 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-full w-10 focus:outline-none focus:shadow-outline"
        onClick={() => delTodos(todo.id)}>
          -
          </button>
    </li>
  )
}

export default ToDoItem