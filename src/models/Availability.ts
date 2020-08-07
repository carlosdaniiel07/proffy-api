import { Entity, PrimaryColumn, Column, OneToOne, Generated, ManyToOne } from 'typeorm'

import { Subject } from './Subject'
import { Teacher } from './Teacher'

@Entity()
export class Availability {
  @PrimaryColumn({
    length: 36
  })
  @Generated('uuid')
  id!: string

  @OneToOne(type => Subject, {
    nullable: false,
    eager: false
  })
  subject!: Subject

  @Column({
    nullable: false,
    length: 20,
    name: 'week_day'
  })
  weekDay!: string

  @Column({
    nullable: false,
    length: 5,
    name: 'start_at'
  })
  startAt!: string

  @Column({
    nullable: false,
    length: 5,
    name: 'finish_at'
  })
  finishAt!: string

  @Column({
    nullable: false,
    type: 'decimal',
    scale: 2
  })
  price!: number

  @ManyToOne(type => Teacher, teacher => teacher.availability, {
    nullable: false,
    eager: false
  })
  teacher!: Teacher
}
