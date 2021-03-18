import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from './auth'

export default function Login() {
  const history = useHistory()
  const { signup } = useAuth()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    signup(username, password).then(r => {
      history.push('/')
    })
    // request.login(username, password)
  }
  return (
    <div>
      <Link to="/login">login</Link>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setUsername(e.target.value)}/>
        <input type="text" onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}
