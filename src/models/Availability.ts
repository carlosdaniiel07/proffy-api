import { Entity, PrimaryColumn, Column, Generated, ManyToOne, JoinColumn } from 'typeorm'

import { Subject } from './Subject'
import { Teacher } from './Teacher'

@Entity()
export class Availability {
  @PrimaryColumn({
    length: 36
  })
  @Generated('uuid')
  id?: string

  @ManyToOne(type => Subject, {
    nullable: false,
    eager: false
  })
  @JoinColumn({ name: 'id_subject' })
  subject?: Subject

  @Column({
    nullable: false,
    length: 20,
    name: 'week_day'
  })
  weekDay?: string

  @Column({
    nullable: false,
    length: 5,
    name: 'start_at'
  })
  startAt?: string

  @Column({
    nullable: false,
    length: 5,
    name: 'finish_at'
  })
  finishAt?: string

  @Column({
    nullable: false,
    type: 'decimal',
    precision: 10,
    scale: 2
  })
  price?: number

  @ManyToOne(type => Teacher, teacher => teacher.availability, {
    nullable: false,
    eager: false
  })
  @JoinColumn({ name: 'id_teacher' })
  teacher?: Teacher
}
