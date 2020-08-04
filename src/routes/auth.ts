// eslint-disable-next-line no-unused-vars
import { Router } from 'express'

export default (route: Router) => {
  route.post('/auth', (req, res) => {
    return res.json({
      success: true
    })
  })

  route.post('/sign-up', (req, res) => {
    return res.json({
      success: true
    })
  })
}
