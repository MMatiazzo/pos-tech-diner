import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { Cliente } from './clientes/domain/entities/Cliente.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'db',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'postech',
  "entities": ["dist/**/**.entity{.ts,.js}"],
  synchronize: true,
};