import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todo-slice/todoSlice'
import todoAsyncReducer from '../features/todo-slice-async/todoSlice'
import todoAsyncAuthReducer from '../features/todo-authenticated/todo/todoSlice'
import authReducer from '../features/todo-authenticated/auth/auth'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    todoAsync: todoAsyncReducer,
    todoAsyncAuth: todoAsyncAuthReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
