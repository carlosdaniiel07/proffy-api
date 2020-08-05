// eslint-disable-next-line no-unused-vars
import { Request, Response, NextFunction } from 'express'

export default (controller: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const [statusCode, data] = await controller(req, res)
      return res.status(statusCode).send(data)
    } catch (err) {
      next(err)
    }
  }
}
