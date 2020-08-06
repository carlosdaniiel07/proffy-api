import { Entity, Column, PrimaryColumn, ManyToOne, OneToOne, JoinColumn } from 'typeorm'
import { Subject } from './Subject'
import { Auth } from './Auth'

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
    type: 'date',
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

  @OneToOne(type => Auth, {
    nullable: false,
    eager: false
  })
  @JoinColumn()
  user!: Auth

  @ManyToOne(type => Subject, subject => subject.students, {
    nullable: false,
    eager: true
  })
  subject!: Subject
}
