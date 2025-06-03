import React from 'react'
import ToDoInput from './ToDoInput';
import ToDoItem from './ToDoItem';
import { useTodo } from '../contexts/ToDoContext';

const ToDoListings = () => {
  const { todos } = useTodo();

  return (
    <section className="bg-violet-200 py-50 text-center">
      <div className="container-xl lg:container m-auto">
        <div className="grid p-4 rounded-lg">
          
          <ToDoInput />

          <ul>
            {todos.map((todo) => (
              <ToDoItem key={todo.id} todo={todo} />
            ))}
          </ul>
          
        </div>
      </div>
    </section>

  );
};


export default ToDoListings;