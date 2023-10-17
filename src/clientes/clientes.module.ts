import { Module } from '@nestjs/common';
import { ClientesController } from './adapters/driving/ClientesController';
import { ClientesService } from './domain/inboundPorts/ClienteService';
import { ClientesPostgresRepository } from './adapters/driven/ClientesPostgres';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ClientesController],
  imports: [],
  providers: [
    ClientesService,
    PrismaService,
    ClientesPostgresRepository
  ],
})
export class ClientesModule {}
