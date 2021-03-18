import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getTodos, selectTodos } from './todoSlice'
import TodoList from './TodoList'
import TodoForm from './TodoForm'
import { useAuth } from '../auth/auth'
// import './TodoApp.css'

export default function TodoApp({name}) {
  const dispatch = useDispatch()
  const { logout } = useAuth()
  const todos = useSelector(selectTodos)
  useEffect(() => {
    dispatch(getTodos())
  }, [])
  useEffect(() => {
    console.log('%c State from TodoApp todoSliceAsyncAuthenticated', 'color:green;')
    console.table(todos)
  }, [todos])
  function handleLogout() {
    dispatch(logout()).then(() => history.push('/login'))
  }
  return (
    <div className="todo-app">
      <span onClick={() => logout()}>Logout</span>
      <h1>{name}</h1>
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  )
}
