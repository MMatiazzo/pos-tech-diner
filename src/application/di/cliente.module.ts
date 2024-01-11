import { Module } from '@nestjs/common';

import { PrismaService } from "../../prisma/prisma.service";
import { ClienteController } from '../api/http-rest/controller/cliente.controller';
import { CadastrarClienteService } from "../../core/services/cliente/usecase/cadastrar-cliente.service";
import { ClientePostgresRepository } from "../../infrastructure/database/repository/cliente-postgres.repository";

import { IClienteRepositoryPort } from "../../core/domain/cliente/ports/persistence/Icliente-repository.port";
import { ICadastraClienteUseCase } from "../../core/domain/cliente/usecase/Icadastra-cliente.usecase";
import { ClienteFactory } from '../factory/cliente.factory';

@Module({
  controllers: [ClienteController],
  imports: [],
  providers: [
    PrismaService,
    ClienteFactory,
    {
      provide: ICadastraClienteUseCase,
      useClass: CadastrarClienteService
    },
    {
      provide: IClienteRepositoryPort,
      useClass: ClientePostgresRepository,
    },
  ],
})
export class ClienteModule {}

