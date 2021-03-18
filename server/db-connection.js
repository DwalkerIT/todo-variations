import knex from 'knex'

const dbConnection = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'todo_app_example'
  },
  log: {
    debug(message) {
      const { sql, bindings } = message
      console.log('sql =>', sql)
      if (bindings) {
        console.log('bindings =>', bindings)
      }
    },
  }
})

export default dbConnection