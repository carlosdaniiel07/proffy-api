/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'

import { CreateTeacherDTO } from '../models/dtos/CreateTeacherDTO'

import teacherService from './../services/teacher'

const index = async (req: Request, res: Response) => {
  const teachers = await teacherService.getAll()
  return [200, teachers]
}

const show = async (req: Request, res: Response) => {
  const { id } = req.params
  const teacher = await teacherService.getById(id)

  return [200, teacher]
}

const me = async (req: any, res: Response) => {
  const { id } = req.user
  const teacher = await teacherService.getByUser(id)

  return [200, teacher]
}

const save = async (req: Request, res: Response) => {
  const { name, email, password, bornDate, photoUrl, phone, bio, availability } = req.body
  const objectDTO: CreateTeacherDTO = { name, email, password, bornDate, photoUrl, phone, bio, availability }

  const teacher = await teacherService.createTeacher(objectDTO)

  delete teacher.user

  return [201, teacher]
}

export default {
  index,
  show,
  me,
  save
}
