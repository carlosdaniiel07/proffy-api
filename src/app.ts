import express from 'express'
import appRoutes from './routes'

import globalErrorHandler from './middlewares/globalErrorHandler'

const app = express()
const router = express.Router()

appRoutes.forEach(route => route(router))

app.use(express.json())
app.use(router)
app.use(globalErrorHandler())

export default app
