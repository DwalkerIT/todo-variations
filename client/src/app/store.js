import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todo-slice/todoSlice'
import todoAsyncReducer from '../features/todo-slice-async/todoSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    todoAsync: todoAsyncReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
