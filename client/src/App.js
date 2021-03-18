import React from 'react'
import TodoApp from './features/todo-use-state/TodoApp'
import TodoAppSlice from './features/todo-slice/TodoApp'
import TodoAppSliceAsync from './features/todo-slice-async/TodoApp'
import './App.css'

function App() {
  return (
    <div>
      <div id="todoApps">
        <TodoApp name="useState example" />
        <TodoAppSlice name="slice example" />
        <TodoAppSliceAsync name="slice async example" />
      </div>
    </div>
  )
}

export default App
