// eslint-disable-next-line no-unused-vars
import { Router } from 'express'

import tokenValidator from './../middlewares/tokenValidator'
import cleanController from './../middlewares/cleanController'

import TeachersController from './../controllers/teachers'

export default (route: Router) => {
  route.get('/teachers', tokenValidator, cleanController(TeachersController.index))
  route.get('/teachers/:id', tokenValidator, cleanController(TeachersController.show))
  route.post('/teachers', cleanController(TeachersController.save))
}
