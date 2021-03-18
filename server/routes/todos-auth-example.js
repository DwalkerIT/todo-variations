import express from 'express'
import dbConnection from '../db-connection.js'

const router = express.Router()

router.get('/todos', async (req, res) => {
  const userId = req.user.id
  const todos = await dbConnection.raw(`SELECT * FROM todos WHERE user_id = ? ORDER BY id;`, [userId])
  res.json(todos.rows)
})

export default router