/* eslint-disable no-unused-vars */
import { getRepository } from 'typeorm'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import JWT_CONFIG from './../config/jwt'

import { Auth, Role } from './../models/Auth'
import { ApiError } from './../models/ApiError'

const auth = async (email: string, password: string): Promise<string> => {
  const authRepository = getRepository(Auth)
  const user = await authRepository.findOne({ where: { email } })

  if (!user) {
    throw new ApiError(404, 'Nenhum usuário cadastrado com este e-mail')
  }

  if (!bcrypt.compareSync(password, user.password!)) {
    throw new ApiError(400, 'E-mail ou senha incorretos')
  }

  await authRepository.update(user, { lastLogin: new Date() })

  // generate JWT token
  const { id, role } = user
  const token = jwt.sign({ id, email, role }, JWT_CONFIG.JWT_SECRET, { expiresIn: JWT_CONFIG.JWT_DURATION })

  return token
}

const createUser = async (email: string, password: string, role: Role): Promise<Auth> => {
  const authRepository = getRepository(Auth)
  const emailExists = (await authRepository.count({ where: { email } })) > 0

  if (emailExists) {
    throw new ApiError(400, 'Já existe um usuário cadastrado com este e-mail')
  }

  return authRepository.save({
    email: email,
    password: bcrypt.hashSync(password, 10),
    role: role
  })
}

const getTokenClaims = (authorizationToken: string): any => {
  const token = authorizationToken.length >= 7 && authorizationToken.substring(7, authorizationToken.length)

  if (!token) {
    return null
  }

  try {
    jwt.verify(token, JWT_CONFIG.JWT_SECRET)
    return jwt.decode(token)
  } catch (err) {
    return null
  }
}

export default {
  auth,
  createUser,
  getTokenClaims
}
