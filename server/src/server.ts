import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'
const app = fastify()

app.register(cors, {
  origin: true,
  // origin: ['http://localhost:3000', 'http://rocketseat.com.br/'], // todas URLS, de front-end poderão acessar nosso back-end
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server running on http://localhost:3333')
  })
