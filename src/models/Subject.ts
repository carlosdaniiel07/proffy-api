import { Entity, Column, PrimaryColumn } from 'typeorm'

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
}
