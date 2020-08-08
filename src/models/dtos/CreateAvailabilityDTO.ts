// eslint-disable-next-line no-unused-vars
import { Subject } from './../Subject'

export interface CreateAvailabilityDTO {
  weekDay: string
  startAt: string
  finishAt: string
  price: number
  subject: Subject
}
