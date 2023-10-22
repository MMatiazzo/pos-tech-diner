import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientePostgresRepository } from './adapters/driven/cliente-postgres.repository';
import { ClientesController } from './adapters/driving/cliente.controller';
import { ClientesService } from './domain/inboundPorts/cliente.service';
import { IClienteRepository } from './domain/outboundPorts/Icliente.repository';

@Module({
  controllers: [ClientesController],
  imports: [],
  providers: [
    PrismaService,
    ClientesService,
    {
      provide: IClienteRepository,
      useClass: ClientePostgresRepository,
    },
  ],
})
export class ClientesModule {}

