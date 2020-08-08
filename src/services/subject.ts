import { getRepository } from 'typeorm'

import { Subject } from './../models/Subject'
import { ApiError } from '../models/ApiError'

const getAll = async (): Promise<Subject[]> => {
  const subjectRepository = getRepository(Subject)
  return await subjectRepository.find({ active: true })
}

const getById = async (id: string): Promise<Subject> => {
  const subjectRepository = getRepository(Subject)
  const subject = await subjectRepository.findOne({ where: { id, active: true } })

  if (!subject) {
    throw new ApiError(404, 'Matéria não encontrada')
  }

  return subject
}

const getByIds = async (ids: string[]): Promise<Subject[]> => {
  const subjects = await getRepository(Subject).findByIds(ids)
  const subjectsId = subjects.map(subject => subject.id)

  ids.forEach(id => {
    if (!subjectsId.includes(id)) {
      throw new ApiError(404, 'Matéria não encontrada')
    }
  })

  return subjects
}

const countByName = async (name: string): Promise<number> => {
  const subjectRepository = getRepository(Subject)
  const count = await subjectRepository.count({ where: { name, active: true } })

  return Promise.resolve(count)
}

const createSubject = async (name: string): Promise<Subject> => {
  const count = await countByName(name)

  if (count > 0) {
    throw new ApiError(400, `Já existe uma matéria com o nome ${name}`)
  }

  return await getRepository(Subject).save({ name })
}

const deleteById = async (id: string): Promise<Subject> => {
  const subject = await getById(id)

  if (subject.active) {
    await getRepository(Subject).update(subject, { active: false })
  }

  return Promise.resolve(subject)
}

export default {
  getAll,
  getById,
  getByIds,
  countByName,
  createSubject,
  deleteById
}
