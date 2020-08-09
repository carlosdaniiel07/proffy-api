// eslint-disable-next-line no-unused-vars
import { Router } from 'express'

import tokenValidator from './../middlewares/tokenValidator'
import cleanController from './../middlewares/cleanController'

import StudentsController from './../controllers/students'

import { Role } from './../models/Auth'

export default (route: Router) => {
  route.get('/students', tokenValidator([]), cleanController(StudentsController.index))
  route.get('/students/me', tokenValidator([Role.STUDENT]), cleanController(StudentsController.me))
  route.post('/students', cleanController(StudentsController.save))
}
