import 'reflect-metadata'

import path from 'node:path'
import { DataSource } from 'typeorm'

import Config from '../../config'

export const AppDataSource: DataSource = new DataSource({
  type: 'mysql',
  host: Config.db.host,
  port: Config.db.port,
  username: Config.db.username,
  password: Config.db.password,
  database: Config.db.database,
  synchronize: true,
  logging: true,
  entities: [path.resolve(__dirname, '/../entity/*{.js,.ts}')],
  migrations: [],
  subscribers: []
})
