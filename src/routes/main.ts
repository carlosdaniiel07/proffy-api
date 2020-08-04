// eslint-disable-next-line no-unused-vars
import { Router } from 'express'

export default (route: Router) => {
  route.get('/', (req, res) => {
    return res.json({
      message: 'Hello Type Script!'
    })
  })
}
