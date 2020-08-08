// eslint-disable-next-line no-unused-vars
import { Router } from 'express'

import tokenValidator from './../middlewares/tokenValidator'
import cleanController from './../middlewares/cleanController'

import TeachersController from './../controllers/teachers'

import { Role } from './../models/Auth'

export default (route: Router) => {
  route.get('/teachers', tokenValidator([Role.STUDENT]), cleanController(TeachersController.index))
  route.get('/teachers/:id', tokenValidator([Role.STUDENT]), cleanController(TeachersController.show))
  route.post('/teachers', cleanController(TeachersController.save))
}
