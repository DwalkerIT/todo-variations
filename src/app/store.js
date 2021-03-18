import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todo-slice/todoSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
