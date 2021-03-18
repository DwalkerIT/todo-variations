import React from 'react'
import TodoApp from './features/todo-use-state/TodoApp'
import TodoAppSlice from './features/todo-slice/TodoApp'
import './App.css'

function App() {
  return (
    <div>
      <div id="todoApps">
        <TodoApp />
        <TodoAppSlice />
      </div>
    </div>
  )
}

export default App
