import React from 'react'
import TodoApp from './features/todo-use-state/TodoApp'
import TodoAppSlice from './features/todo-slice/TodoApp'
import TodoAppSliceAsync from './features/todo-slice-async/TodoApp'
import TodoAppAuth from './features/todo-authenticated/Routes'
import './App.css'

function App() {
  return (
    <div>
      <div id="todoApps">
        <TodoApp name="useState example" />
        <TodoAppSlice name="slice example" />
        <TodoAppSliceAsync name="slice async example" />
        <TodoAppAuth name="slice authenticated example" />
      </div>
    </div>
  )
}

export default App
