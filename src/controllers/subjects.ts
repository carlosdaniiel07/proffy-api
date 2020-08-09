// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import subjectService from './../services/subject'

const index = async (req: Request, res: Response) => {
  const subjects = await subjectService.getAll()

  return [200, subjects]
}

const show = async (req: Request, res: Response) => {
  const { id } = req.params
  const subject = await subjectService.getById(id)

  return [200, subject]
}

const save = async (req: Request, res: Response) => {
  const { name } = req.body
  const subject = await subjectService.createSubject(name)

  return [201, subject]
}

const remove = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name } = await subjectService.deleteById(id)

  return [200, { id, name }]
}

export default {
  index,
  show,
  save,
  remove
}
