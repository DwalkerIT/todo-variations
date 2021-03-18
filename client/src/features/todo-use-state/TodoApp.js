import React, { useState, useEffect } from 'react'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import './TodoApp.css'

export default function TodoApp({name}) {
  const [todos, setTodos] = useState([])
  useEffect(() => {
    console.log('%c State from TodoApp useState', 'color:green;')
    console.table(todos)
  }, [todos])
  function handleSubmit(todoDescription) {
    const newTodo = {
      id: Math.random(),
      description: todoDescription,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  function deleteTodo(id) {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  function toggleCompleted(id) {
    const newTodos = [...todos]
    const currTodo = newTodos.find(todo => todo.id === id)
    currTodo.completed = !currTodo.completed
    setTodos(newTodos)
  }
  return (
    <div className="todo-app">
      <h1>{name}</h1>
      <TodoForm onSubmit={handleSubmit} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onStatusChange={toggleCompleted}
      />
    </div>
  )
}
