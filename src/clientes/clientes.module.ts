import { Module } from '@nestjs/common';
import { ClientesController } from './adapters/driving/ClientesController';
import { ClientesService } from './domain/inboundPorts/ClienteService';
import { IClientesRepository } from './domain/outboundPorts/IClientesRepository';
import { ClientesPostgres } from './adapters/driven/ClientesPostgres';
import { Cliente } from './domain/entities/Cliente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ClientesController],
  imports: [TypeOrmModule.forFeature([Cliente])],
  providers: [
    ClientesService,
    {
      provide: IClientesRepository,
      useClass: ClientesPostgres,
    },
  ],
})
export class ClientesModule {}
