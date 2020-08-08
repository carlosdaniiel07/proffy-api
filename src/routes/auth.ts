// eslint-disable-next-line no-unused-vars
import { Router } from 'express'

// import tokenValidator from './../middlewares/tokenValidator'
import cleanController from './../middlewares/cleanController'

import AuthController from './../controllers/auth'

export default (route: Router) => {
  route.post('/auth', cleanController(AuthController.authUser))
  route.post('/sign-up', cleanController(AuthController.saveUser))
}
