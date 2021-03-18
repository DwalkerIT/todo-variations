import express from 'express'
import dbConnection from '../db-connection.js'

const router = express.Router()

router.get('/todos', async (req, res) => {
  // const todos = await dbConnection.raw(`SELECT * FROM todos ORDER BY id;`)
  const todos = await dbConnection.table('todos').select().orderBy('id')
  res.json(todos)
})

router.get('/todos/search', async (req, res) => {
  const description = req.query.description
  console.log(description)
  const todos = await dbConnection.table('todos').where('description', 'like', `%${description}%`)
  res.json(todos)
})

// knex provides us methods like insert to insert into the database
// this is equivalent to
// INSERT INTO todos (description, status) VALUES (?,?), ['some description', 'active']
router.post('/todos', async (req, res) => {
  const description = req.body.description
  // notice I am hardcoding the userId of 1 here
  await dbConnection.table('todos').insert({description: description, status: 'active', userId: 1})
  res.json({message: 'todo created!'})
})

// knex also provides a delete method for this too...
router.delete('/todos/:id', async (req, res) => {
  const todoId = req.params.id
  await dbConnection.raw(`DELETE FROM todos WHERE id = ?`, [todoId])
  res.json({message: 'todo deleted!'})
})

// knex also gives us a raw method which just takes raw sql
// we learned this way first since it is closer to SQL
// this is equivalent to...
// UPDATE todos SET property_thing = ? WHERE id = ?, ['active', 1]
// this one is nice because whatever properties we update can be simply passed without
// setting column names manually or even conditionally...
router.patch('/todos/:id', async (req, res) => {
  const propertiesToUpdate = req.body
  // const { description } = req.body
  const todoId = req.params.id
  // await dbConnection.raw(`UPDATE todos SET description = ? WHERE id = ?`, [description, todoId])
  await dbConnection.table('todos').where({id: todoId}).update(propertiesToUpdate)
  res.json({message: 'todo updated!'})
})

export default router