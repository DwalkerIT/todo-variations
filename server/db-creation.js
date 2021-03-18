import dbConnection from './db-connection.js'

async function main() {
  const hasTableTodos = await dbConnection.schema.hasTable('todos')
  if (hasTableTodos) {
    await dbConnection.schema.dropTable('todos')
  }
  await dbConnection.schema.createTable('todos', function (table) {
    table.increments()
    table.string('description')
    table.enu('status', ['active', 'completed'])
  })
  await dbConnection.table('todos').insert([
    {
      description: 'todo 1',
      status: 'active',
    },
    {
      description: 'todo 2',
      status: 'active',
    },
    {
      description: 'todo 3',
      status: 'completed',
    },
  ])
  process.exit()
}

main()
