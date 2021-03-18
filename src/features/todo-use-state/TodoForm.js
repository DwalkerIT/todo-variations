import React, { useState } from 'react'

export default function TodoForm(props) {
  const [todoText, setTodoText] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    props.onSubmit(todoText)
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
