import React from 'react'

export default function TodoItem(props) {
  const todo = props.todo
  return (
    <li className="todo-app-item">
      <span>{todo.description}</span>
      <div>
        <span onClick={() => props.onDelete(todo.id)}>x</span>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => props.onStatusChange(todo.id)}
        />
      </div>
    </li>
  )
}
