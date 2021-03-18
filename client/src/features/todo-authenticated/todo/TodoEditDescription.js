import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { updateTodoDescription } from './todoSlice'

export default function TodoEditDescription({todo}) {
  const dispatch = useDispatch()
  const [text, setTodoText] = useState('')
  const [editable, setEditable] = useState(false)
  useEffect(() => {
    setTodoText(todo.description)
  }, [])
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(updateTodoDescription(todo.id, text))
  }
  return (
    <div>
      {
        editable &&
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setTodoText(e.target.value)}
          />
        </form>
      }
      {!editable && <span onClick={() => setEditable(true)}>{todo.description}</span>}
    </div>
  )
}
