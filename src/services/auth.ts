import { getRepository } from 'typeorm'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import JWT_CONFIG from './../config/jwt'
import { Auth } from '../models/Auth'

const auth = async (email: string, password: string): Promise<string> => {
  const authRepository = getRepository(Auth)
  const user = await authRepository.findOne({ where: { email } })

  if (!user) {
    throw Error('Nenhum usuário cadastrado com este e-mail')
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw Error('E-mail ou senha incorretos')
  }

  // generate JWT token
  const { id, role } = user
  const token = jwt.sign({ id, email, role }, JWT_CONFIG.JWT_SECRET, { expiresIn: JWT_CONFIG.JWT_DURATION })

  return Promise.resolve(token)
}

const createUser = async (email: string, password: string): Promise<Auth> => {
  const authRepository = getRepository(Auth)
  const emailExists = (await authRepository.count({ where: { email } })) > 0

  if (emailExists) {
    throw Error('Já existe um usuário cadastrado com este e-mail')
  }

  return authRepository.save({
    email: email,
    password: bcrypt.hashSync(password, 10),
    role: 'ROLE_ADMIN'
  })
}

export default {
  auth,
  createUser
}
