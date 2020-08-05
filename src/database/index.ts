import 'reflect-metadata'
import { createConnection } from 'typeorm'

// entities
import { Auth } from './../models/Auth'

export default async () => {
  await createConnection({
    name: 'default',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'proffy_db',
    synchronize: true,
    entities: [
      Auth
    ]
  })

  console.log('[!] Database connected!')
}
