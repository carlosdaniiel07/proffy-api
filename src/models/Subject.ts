import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'
import { Student } from './Student'

@Entity()
export class Subject {
  @PrimaryColumn({
    length: 36
  })
  id!: string

  @Column({
    nullable: false,
    length: 40
  })
  name!: string

  @Column({
    nullable: false,
    default: true
  })
  active!: boolean

  @OneToMany(type => Student, student => student.subject, {
    lazy: true
  })
  students!: Student[]
}
