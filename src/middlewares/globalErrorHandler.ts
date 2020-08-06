/* eslint-disable no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../models/ApiError'

export default () => {
  return (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    const { statusCode, message } = err

    if (res.headersSent) {
      next(err)
    }

    return res.status(statusCode || 500).json({ message })
  }
}
