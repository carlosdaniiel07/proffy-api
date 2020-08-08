// eslint-disable-next-line no-unused-vars
import { Router } from 'express'

import tokenValidator from './../middlewares/tokenValidator'
import cleanController from './../middlewares/cleanController'

import SubjectsController from './../controllers/subjects'

export default (route: Router) => {
  route.get('/subjects', cleanController(SubjectsController.index))
  route.get('/subjects/:id', cleanController(SubjectsController.show))
  route.post('/subjects', tokenValidator([]), cleanController(SubjectsController.save))
  route.delete('/subjects/:id', tokenValidator([]), cleanController(SubjectsController.remove))
}
