// eslint-disable-next-line no-unused-vars
import { CreateAvailabilityDTO } from './CreateAvailabilityDTO'

export interface CreateTeacherDTO {
  name: string
  email: string
  password: string
  bornDate: string
  photoUrl: string
  phone: string
  bio: string
  availability: CreateAvailabilityDTO[]
}
