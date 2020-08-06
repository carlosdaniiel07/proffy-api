import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm'
import { Subject } from './Subject'

@Entity()
export class Student {
  @PrimaryColumn({
    length: 36
  })
  id!: string

  @Column({
    nullable: false,
    length: 80
  })
  name!: string

  @Column({
    nullable: false,
    name: 'born_date'
  })
  bornDate!: Date

  @Column({
    nullable: true,
    length: 100
  })
  address!: string

  @Column({
    nullable: true,
    length: 80
  })
  district!: string

  @Column({
    nullable: true,
    length: 60
  })
  city!: string

  @Column({
    nullable: false,
    length: 2
  })
  state!: string

  @ManyToOne(type => Subject, subject => subject.students, {
    nullable: false,
    eager: true
  })
  subject!: Subject
}
