// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import authService from './../services/auth'

const authUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const accessToken = await authService.auth(email, password)

  return [200, { accessToken }]
}

const saveUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const { id, role } = await authService.createUser(email, password)

  return [201, { id, email, role }]
}

export default {
  authUser,
  saveUser
}
