// eslint-disable-next-line no-unused-vars
import { Router } from 'express'

import cleanController from './../middlewares/cleanController'

import TeachersController from './../controllers/teachers'

export default (route: Router) => {
  route.post('/teachers', cleanController(TeachersController.save))
}
