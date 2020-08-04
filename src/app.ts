import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
  return res.json({
    status: 200,
    success: true,
    message: 'Hello TypeScript',
    timestamp: new Date().getTime()
  })
})

export default app
