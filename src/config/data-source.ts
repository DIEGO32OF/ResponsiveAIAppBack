import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres', 
  host: 'localhost',
  port: 5432,
  username: 'your_username',
  password: 'your_password',
  database: 'your_database',
  synchronize: true, // Usar 'true' solo en desarrollo
  logging: false,
  entities: ['src/models/**/*.ts'], 
});
