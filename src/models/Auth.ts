import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Auth {
  @PrimaryColumn({
    length: 36
  })
  id!: string

  @Column({
    nullable: false,
    length: 100,
    unique: true
  })
  email!: string

  @Column({
    nullable: false,
    length: 255
  })
  password!: string

  @Column({
    nullable: false,
    length: 30
  })
  role!: string

  @Column({
    nullable: true,
    default: null
  })
  lastLogin!: Date

  @Column({
    nullable: false,
    default: true
  })
  active!: boolean
}
