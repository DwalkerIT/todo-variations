import { createSlice } from '@reduxjs/toolkit'
import request from '../request'
// import axios from 'axios'

export const todoSlice = createSlice({
  name: 'todoAuthenticated',
  initialState: {
    todos: []
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload
    }
  },
})

export const { setTodos } = todoSlice.actions

export const getTodos = () => dispatch => {
  request.get('/auth-example/todos').then(resp => {
    console.log('%c FROM the GET request auth 👇', 'color: purple; font-size: 30px')
    dispatch(setTodos(resp.data))
  })
}

// notice how I can wait for my promise using async! 
export const addTodo = (todoText) => async dispatch => {
  await request.post('/auth-example/todos', {description: todoText})
  dispatch(getTodos())
}

export const deleteTodo = (id) => async dispatch => {
  await request.delete('/auth-example/todos/' + id)
  dispatch(getTodos())
}

export const updateTodoStatus = (id, status) => async dispatch => {
  const newStatus = status == 'completed' ? 'active' : 'completed'
  await request.patch('/auth-example/todos/' + id, {status: newStatus})
  dispatch(getTodos())
}

// notice how I can use object shorthand to simplify sending up the same name!
export const updateTodoDescription = (id, description) => async dispatch => {
  alert(description)
  await request.patch('/auth-example/todos/' + id, {description})
  dispatch(getTodos())
}

export const updateTodo = (id, status) => async dispatch => {
  await request.update('/auth-example/todos/' + id, {status: status})
  dispatch(getTodos())
}

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodos = (state) => state.todoAsyncAuth.todos

export default todoSlice.reducer
