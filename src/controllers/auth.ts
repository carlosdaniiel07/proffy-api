// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import authService from './../services/auth'

const authUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const accessToken = await authService.auth(email, password)

  return res.json({ accessToken })
}

const saveUser = async (req: Request, res: Response) => {
  const { email, password } = req.body
  const user = await authService.createUser(email, password)

  return res.json(user)
}

export default {
  authUser,
  saveUser
}
