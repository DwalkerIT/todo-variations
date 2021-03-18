import React from 'react'

export default function TodoApp() {
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  )
}
