import 'dotenv/config'
import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { Pool } from 'pg'

console.log('TENCENT_POSTGRES_CONNECTION_STRING:', process.env.TENCENT_POSTGRES_CONNECTION_STRING)
console.log('YYYYY_PORT:', process.env.YYYYY_PORT)

const pool = new Pool({
  connectionString: process.env.TENCENT_POSTGRES_CONNECTION_STRING,
})

pool.connect().then((value) => {
  console.log('Connected to Postgres')
  value.query('SELECT NOW()').then((res) => {
    console.log(res.rows[0])
    value.release()
  })
})

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
