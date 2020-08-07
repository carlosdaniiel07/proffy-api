/* eslint-disable no-unused-vars */
import { getRepository } from 'typeorm'

import authService from './../services/auth'
import subjetService from './../services/subject'

import { Student } from './../models/Student'
import { CreateStudentDTO } from '../models/dtos/CreateStudentDTO'

export const getAll = async (): Promise<Student[]> => {
  return getRepository(Student).find()
}

export const createStudent = async (objectDTO: CreateStudentDTO): Promise<Student> => {
  const { name, email, password, bornDate, city, state } = objectDTO
  const { id: subjectId } = objectDTO.subject

  const subject = await subjetService.getById(subjectId)
  const user = await authService.createUser(email, password)

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
