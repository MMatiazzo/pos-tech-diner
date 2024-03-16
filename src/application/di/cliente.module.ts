import { Module } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { CadastrarClienteService } from "../../core/services/cliente/usecase/cadastrar-cliente.service";
import { PrismaService } from "../../infrastructure/persistence/prisma/prisma.service";
import { ClientePostgresRepository } from "../../infrastructure/persistence/prisma/repository/cliente/cliente-postgres.repository";
import { ClienteController } from '../api/http-rest/controller/cliente.controller';

import { IIdentificaClienteUseCase } from 'src/core/domain/cliente/usecase/Iidentifica-cliente.usecase';
import { IdentificaClienteService } from 'src/core/services/cliente/usecase/identificar-cliente.service';
import { IClienteRepositoryPort } from "../../core/domain/cliente/ports/persistence/Icliente-repository.port";
import { ICadastraClienteUseCase } from "../../core/domain/cliente/usecase/Icadastra-cliente.usecase";
import { AuthLambda } from 'src/infrastructure/framework/aws/lambda/auth-lambda';
import { IAuthLambdaGateway } from 'src/infrastructure/framework/aws/lambda/Iauth-lambda.gateway';


const persistenceProviders: Provider[] = [
  PrismaService,
  {
    provide: IClienteRepositoryPort,
    useFactory: (prisma: PrismaService) => new ClientePostgresRepository(prisma),
    inject: [PrismaService]
  },
  {
    provide: IAuthLambdaGateway,
    useFactory: () => new AuthLambda(),
    inject: []
  }
]

const useCaseProviders: Provider[] = [
  // cliente-repository injected into cadastrar-cliente-service
  {
    provide: ICadastraClienteUseCase,
    useFactory: (repository: IClienteRepositoryPort, authLambdaGateway: IAuthLambdaGateway) => new CadastrarClienteService(repository, authLambdaGateway),
    inject: [IClienteRepositoryPort, IAuthLambdaGateway]
  },

  // cliente-repository injected into identificar-cliente-service
  {
    provide: IIdentificaClienteUseCase,
    useFactory: (repository: IClienteRepositoryPort, authLambdaGateway: IAuthLambdaGateway) => new IdentificaClienteService(repository, authLambdaGateway),
    inject: [IClienteRepositoryPort, IAuthLambdaGateway]
  }
]

@Module({
  controllers: [ClienteController],
  imports: [],
  providers: [
    ...persistenceProviders,
    ...useCaseProviders,
  ],
})
export class ClienteModule { }
