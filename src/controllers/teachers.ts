/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'

import { CreateTeacherDTO } from '../models/dtos/CreateTeacherDTO'

import teacherService from './../services/teacher'

const save = async (req: Request, res: Response) => {
  const { name, email, password, bornDate, photoUrl, phone, bio, availability } = req.body
  const objectDTO: CreateTeacherDTO = { name, email, password, bornDate, photoUrl, phone, bio, availability }

  const teacher = await teacherService.createTeacher(objectDTO)

  delete teacher.user

  return [201, teacher]
}

export default {
  save
}
