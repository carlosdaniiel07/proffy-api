import express from 'express'
import appRoutes from './routes'

const app = express()
const router = express.Router()

appRoutes.forEach(route => route(router))

app.use(router)
app.use(express.json())

export default app
