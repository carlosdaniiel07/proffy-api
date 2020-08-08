/* eslint-disable no-unused-vars */
import { getRepository } from 'typeorm'

import { Teacher } from './../models/Teacher'
import { Availability } from './../models/Availability'
import { Role } from './../models/Auth'

import { CreateTeacherDTO } from '../models/dtos/CreateTeacherDTO'

import authService from './auth'
import subjectService from './subject'

const createTeacher = async (objectDTO: CreateTeacherDTO): Promise<Teacher> => {
  const { name, email, password, bornDate, photoUrl, phone, bio, availability: availabilityDTO } = objectDTO

  const subjects = await subjectService.getByIds(availabilityDTO.map(a => a.subject.id))
  const user = await authService.createUser(email, password, Role.TEACHER)

  const availability: Availability[] = availabilityDTO.map(dto => {
    return {
      weekDay: dto.weekDay,
      startAt: dto.startAt,
      finishAt: dto.finishAt,
      price: dto.price,
      subject: subjects.find(s => s.id === dto.subject.id)
    }
  })

  return await getRepository(Teacher).save({
    name,
    bornDate,
    photoUrl,
    phone,
    bio,
    availability,
    user
  })
}

export default {
  createTeacher
}
