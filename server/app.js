import express from 'express'
import './config.js'
import todosRoutes from './routes/todos.js'
import todosAuthExampleRoutes from './routes/todos-auth-example.js'
import authRoutes from './routes/auth.js'
import logRequests from './middleware/logger.js'
import attachUser from './middleware/auth.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(attachUser)
app.use(logRequests)

app.use('/api', todosRoutes)
app.use('/api/auth-example', todosAuthExampleRoutes)
app.use('/api', authRoutes)
function handleStart() {
  console.log('running on port 3001')
}
app.listen(3001, handleStart)