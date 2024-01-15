import { Module } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { PrismaService } from "../../infrastructure/persistence/prisma/prisma.service";

import { IProdutoRepositoryPort } from 'src/core/domain/produtos/port/persistence/Iproduto-repository.port';
import { ICadastraProdutoUseCase } from 'src/core/domain/produtos/usecase/Icadastra-produto.usecase';
import { CadastrarProdutoService } from 'src/core/services/produto/usecase/cadastrar-produto.service';
import { ProdutoPostgresRepository } from 'src/infrastructure/persistence/prisma/repository/produto/produto-postgres.repository';
import { ProdutoController } from '../api/http-rest/controller/produto.controller';


const persistenceProviders: Provider[] = [
  PrismaService,
  {
    provide: IProdutoRepositoryPort,
    useFactory: (prisma: PrismaService) => new ProdutoPostgresRepository(prisma),
    inject: [PrismaService]
  }
]

const useCaseProviders: Provider[] = [
  // produto-repository injected into cadastrar-produto-service
  {
    provide: ICadastraProdutoUseCase,
    useFactory: (repository: IProdutoRepositoryPort) => new CadastrarProdutoService(repository),
    inject: [IProdutoRepositoryPort]
  },
]

@Module({
  controllers: [ProdutoController],
  imports: [],
  providers: [
    ...persistenceProviders,
    ...useCaseProviders,
  ],
})
export class ProdutoModule {}
