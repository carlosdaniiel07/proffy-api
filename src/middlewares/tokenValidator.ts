// eslint-disable-next-line no-unused-vars
import { Response, NextFunction } from 'express'

import authService from './../services/auth'

export default (req: any, res: Response, next: NextFunction) => {
  const authorizationToken = req.headers.authorization

  if (!authorizationToken) {
    return res.status(401).json({ message: 'Não foi fornecido nenhum token no cabeçalho da requisição' })
  }

  const claims = authService.getTokenClaims(authorizationToken!)

  if (!claims) {
    return res.status(401).json({ message: 'Token inválido ou já expirado' })
  }

  const { id, email, role } = claims

  req.user = {
    id,
    email,
    role
  }

  next()
}
