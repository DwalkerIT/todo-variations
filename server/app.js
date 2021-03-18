import express from 'express'
import todosRoutes from './routes/todos.js'
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const objectNotEmpty = (o) => Object.keys(o).length !== 0

app.use(function(req, res, next) {
  console.log(`A ${req.method} was made on the client!`)
  if (objectNotEmpty(req.body)) {
    console.log('request body')
    console.table(req.body)
  }
  if (objectNotEmpty(req.query)) {
    console.log('request query')
    console.table(req.query)
  }
  if (objectNotEmpty(req.params)) {
    console.log('request params')
    console.table(req.params)
  }
  next()
})

app.use('/api', todosRoutes)
function handleStart() {
  console.log('running on port 3001')
}
app.listen(3001, handleStart)