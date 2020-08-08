/* eslint-disable no-unused-vars */
import { getRepository } from 'typeorm'

import authService from './../services/auth'
import subjetService from './../services/subject'

import { Student } from './../models/Student'
import { Role } from './../models/Auth'
import { CreateStudentDTO } from '../models/dtos/CreateStudentDTO'

const getAll = async (): Promise<Student[]> => {
  return getRepository(Student).find()
}

const createStudent = async (objectDTO: CreateStudentDTO): Promise<Student> => {
  const { name, email, password, bornDate, city, state } = objectDTO
  const { id: subjectId } = objectDTO.subject

  const subject = await subjetService.getById(subjectId)
  const user = await authService.createUser(email, password, Role.STUDENT)

  return await getRepository(Student).save({
    name,
    bornDate,
    city,
    state,
    user,
    subject
  })
}

export default {
  getAll,
  createStudent
}
