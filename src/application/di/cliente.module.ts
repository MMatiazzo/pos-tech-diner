import { Module } from '@nestjs/common';

import { CadastrarClienteService } from "../../core/services/cliente/usecase/cadastrar-cliente.service";
import { ClientePostgresRepository } from "../../infrastructure/database/repository/cliente-postgres.repository";
import { PrismaService } from "../../prisma/prisma.service";
import { ClienteController } from '../api/http-rest/controller/cliente.controller';

import { IIdentificaClienteUseCase } from 'src/core/domain/cliente/usecase/Iidentifica-cliente.usecase';
import { IdentificaClienteService } from 'src/core/services/cliente/usecase/identificar-cliente.service';
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
      provide: IIdentificaClienteUseCase,
      useClass: IdentificaClienteService
    },
    {
      provide: IClienteRepositoryPort,
      useClass: ClientePostgresRepository,
    },
  ],
})
export class ClienteModule {}
