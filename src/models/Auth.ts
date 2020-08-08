/* eslint-disable no-unused-vars */
import { Entity, Column, PrimaryColumn, Generated } from 'typeorm'

export enum Role {
  ADMIN = 'ROLE_ADMIN',
  TEACHER = 'ROLE_TEACHER',
  STUDENT = 'ROLE_STUDENT'
}

@Entity()
export class Auth {
  @PrimaryColumn({
    length: 36
  })
  @Generated('uuid')
  id?: string

  @Column({
    nullable: false,
    length: 100,
    unique: true
  })
  email?: string

  @Column({
    nullable: false,
    length: 255
  })
  password?: string

  @Column({
    type: 'enum',
    enum: Role
  })
  role?: Role

  @Column({
    nullable: true,
    default: null,
    name: 'last_login'
  })
  lastLogin?: Date

  @Column({
    nullable: false,
    default: true
  })
  active?: boolean
}
