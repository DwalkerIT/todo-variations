import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodoStatus } from './todoSlice'
import TodoEditDescription from './TodoEditDescription'

export default function TodoItem(props) {
  const todo = props.todo
  const dispatch = useDispatch()
  return (
    <li className="todo-app-item">
      <TodoEditDescription todo={todo} />
      <div>
        <span onClick={() => dispatch(deleteTodo(todo.id))}>x</span>
        <input
          type="checkbox"
          checked={todo.status === 'completed'}
          onChange={() => dispatch(updateTodoStatus(todo.id, todo.status))}
        />
      </div>
    </li>
  )
}
