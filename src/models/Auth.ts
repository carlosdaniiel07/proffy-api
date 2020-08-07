import { Entity, Column, PrimaryColumn, Generated } from 'typeorm'

@Entity()
export class Auth {
  @PrimaryColumn({
    length: 36
  })
  @Generated('uuid')
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
    default: null,
    name: 'last_login'
  })
  lastLogin!: Date

  @Column({
    nullable: false,
    default: true
  })
  active!: boolean
}
