import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
// import { Pool } from 'pg'

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_CONNECTION,
// })

// pool.connect().then((value) => {
//   console.log('Connected to Postgres')
//   // console.log(value)
//   value.query('SELECT NOW()').then((res) => {
//     console.log('11', res.rows[0])
//     value.release()
//   })
// })

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: parseInt(process.env.YYYYY_PORT ?? '8001')
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
