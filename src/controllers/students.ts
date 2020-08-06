/* eslint-disable no-unused-vars */
import { Request, Response } from 'express'

import studentService from './../services/student'

import { CreateStudentDTO } from '../models/dtos/CreateStudentDTO'

const index = async (req: Request, res: Response) => {
  const students = await studentService.getAll()
  return [200, students]
}

const save = async (req: Request, res: Response) => {
  const { name, email, password, bornDate, city, state, subject } = req.body
  const objectDTO: CreateStudentDTO = { name, email, password, bornDate, city, state, subject }

  const student = await studentService.createStudent(objectDTO)

  delete student.user

  return [201, student]
}

export default {
  index,
  save
}
