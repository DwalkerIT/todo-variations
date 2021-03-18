import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTodos, selectTodos } from './todoSlice'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
// import './TodoApp.css'

export default function TodoApp({name}) {
  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  useEffect(() => {
    dispatch(getTodos())
  }, [])
  useEffect(() => {
    console.log('%c State from TodoApp todoSliceAsync', 'color:green;')
    console.table(todos)
  }, [todos])
  return (
    <div className="todo-app">
      <h1>{name}</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  )
}
