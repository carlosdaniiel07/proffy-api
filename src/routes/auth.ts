// eslint-disable-next-line no-unused-vars
import { Router } from 'express'

import AuthController from './../controllers/auth'

export default (route: Router) => {
  route.post('/auth', AuthController.authUser)
  route.post('/sign-up', AuthController.saveUser)
}
