/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express'

import authService from './../services/auth'

import { Role } from './../models/Auth'

export default (roles: Role[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    roles.push(Role.ADMIN)

    const authorizationToken = req.headers.authorization

    if (!authorizationToken) {
      return res.status(401).json({ message: 'Não foi fornecido nenhum token no cabeçalho da requisição' })
    }

    const claims = authService.getTokenClaims(authorizationToken!)

    if (!claims) {
      return res.status(401).json({ message: 'Token inválido ou já expirado' })
    }

    const { id, email, role } = claims

    if (!roles.includes(role)) {
      return res.status(403).json({ message: 'Acesso não autorizado' })
    }

    req.user = { id, email, role }

    next()
  }
}
