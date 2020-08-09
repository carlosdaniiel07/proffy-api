import 'reflect-metadata'
import { createConnection } from 'typeorm'

// entities
import { Auth } from './../models/Auth'
import { Subject } from './../models/Subject'
import { Student } from './../models/Student'
import { Availability } from './../models/Availability'
import { Teacher } from './../models/Teacher'

export default async () => {
  await createConnection({
    name: 'default',
    type: 'mysql',
    host: process.env.MYSQL_HOST || 'localhost',
    port: 3306,
    username: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'proffy_db',
    synchronize: true,
    entities: [
      Auth,
      Subject,
      Student,
      Availability,
      Teacher
    ]
  })

  console.log('[!] Database connected!')
}
