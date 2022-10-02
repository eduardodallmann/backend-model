import { DataSource } from 'typeorm';
import { User } from '../entities/user';

const userName = process.env.POSTGRES_USER || 'postgres';
const password = process.env.POSTGRES_PASSWORD || '123';
const host = process.env.POSTGRES_HOST || 'localhost';
const port = Number(process.env.POSTGRES_PORT) || 5432;
const database = process.env.POSTGRES_DB || 'test';

export const appDataSource = new DataSource({
  type: 'postgres',
  url: `postgres://${userName}:${password}@${host}:${port}/${database}`,
  synchronize: true,
  logging: true,
  entities: [User],
});
