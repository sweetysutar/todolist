import React from 'react'
import Hero from './components/Hero'
import ToDoListings from './components/ToDoListings'
import { ToDoProvider, useTodo } from './contexts/ToDoContext'




const App = () => {
  return (
    <ToDoProvider>
    <Hero />
    <ToDoListings />
    </ToDoProvider>
  )
}

export default App