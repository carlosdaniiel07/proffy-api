import { Entity, PrimaryColumn, Column, Generated, OneToMany, OneToOne, JoinColumn } from 'typeorm'
import { Availability } from './Availability'
import { Auth } from './Auth'

@Entity()
export class Teacher {
  @PrimaryColumn({
    length: 36
  })
  @Generated('uuid')
  id!: string

  @Column({
    nullable: false,
    length: 100
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
    name: 'photo_url'
  })
  photoUrl!: string

  @Column({
    nullable: false,
    length: 20
  })
  phone!: string

  @Column({
    nullable: false
  })
  bio!: string

  @OneToMany(type => Availability, availability => availability.teacher, {
    eager: true,
    cascade: ['insert']
  })
  availability!: Availability[]

  @OneToOne(type => Auth, {
    nullable: false,
    eager: false
  })
  @JoinColumn({ name: 'id_user' })
  user!: Auth
}
