import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Math.random(),
        description: action.payload,
        completed: false
      }
      state.todos.push(newTodo)
    }
  },
})

export const { addTodo } = todoSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTodos = (state) => state.todo.todos

export default todoSlice.reducer
