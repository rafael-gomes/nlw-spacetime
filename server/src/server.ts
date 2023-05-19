import 'dotenv/config'

import fastify from 'fastify'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import { memoriesRoutes } from './routes/memories'
import { authRoutes } from './routes/auth'
const app = fastify()

app.register(cors, {
  origin: true,
  // origin: ['http://localhost:3000', 'http://rocketseat.com.br/'], // todas URLS, de front-end poderão acessar nosso back-end
})

app.register(jwt, {
  secret: 'hdjkalhd1ljk2h3j12h3jkasdhjasldhhadjkhasldh12j3h',
})

app.register(memoriesRoutes)
app.register(authRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on http://localhost:3333')
  })
