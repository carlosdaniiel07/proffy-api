// eslint-disable-next-line no-unused-vars
import { Subject } from '../Subject'

export interface CreateStudentDTO {
  name: string
  email: string
  password: string
  bornDate: Date
  city: string
  state: string
  subject: Subject
}
