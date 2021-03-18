import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectTodos } from './todoSlice'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
// import './TodoApp.css'

export default function TodoApp() {
  const todos = useSelector(selectTodos)
  useEffect(() => {
    console.log('%c State from TodoApp todoSlice', 'color:green;')
    console.table(todos)
  }, [todos])
  return (
    <div className="todo-app">
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  )
}
