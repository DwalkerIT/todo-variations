import dbConnection from './db-connection.js'
import { createSalt, hashPassword } from './utils/auth.js'

async function main() {
  const hasTableTodos = await dbConnection.schema.hasTable('todos')
  const hasTableUsers = await dbConnection.schema.hasTable('users')
  if (hasTableTodos) {
    await dbConnection.schema.dropTable('todos')
  }
  if (hasTableUsers) {
    await dbConnection.schema.dropTable('users')
  }
  await dbConnection.schema.createTable('users', (table) => {
    table.increments("id")
    table.string("username", 45)
    table.string("password", 128)
    table.string("salt", 20)
  })
  await dbConnection.schema.createTable('todos', function (table) {
    table.increments()
    table.string('description')
    table.enu('status', ['active', 'completed'])
    table.integer('user_id')
    table.foreign('user_id').references('users.id').onDelete('cascade')
  })
  const salt1 = createSalt(20)
  await dbConnection.table('users').insert({
    username: 'userOne',
    password: hashPassword('test' + salt1),
    salt: salt1
  })
  const salt2 = createSalt(20)
  await dbConnection.table('users').insert({
    username: 'userTwo',
    password: hashPassword('test' + salt2),
    salt: salt2
  })
  await dbConnection.table('todos').insert([
    {
      description: 'todo 1',
      status: 'active',
      user_id: 1
    },
    {
      description: 'todo 2',
      status: 'completed',
      user_id: 1
    },
    {
      description: 'todo 3',
      status: 'completed',
      user_id: 2
    },
    {
      description: 'todo 4',
      status: 'completed',
      user_id: 2
    },
  ])
  process.exit()
}

main()
