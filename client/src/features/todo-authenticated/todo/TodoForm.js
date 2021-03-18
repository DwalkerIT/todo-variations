import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

export default function TodoForm(props) {
  const [todoText, setTodoText] = useState('')
  const dispatch = useDispatch()
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(addTodo(todoText))
    setTodoText('')
  }
  return (
    <form className="todo-app-form" onSubmit={handleSubmit}>
      <input 
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button>Submit</button>
    </form>
  )
}
