import { Module } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { PrismaService } from "../../infrastructure/persistence/prisma/prisma.service";

import { IProdutoRepositoryPort } from 'src/core/domain/produtos/port/persistence/Iproduto-repository.port';
import { ICadastraProdutoUseCase } from 'src/core/domain/produtos/usecase/Icadastra-produto.usecase';
import { CadastrarProdutoService } from 'src/core/services/produto/usecase/cadastrar-produto.service';
import { ProdutoPostgresRepository } from 'src/infrastructure/persistence/prisma/repository/produto/produto-postgres.repository';
import { ProdutoController } from '../api/http-rest/controller/produto.controller';
import { DeletarProdutoService } from 'src/core/services/produto/usecase/deletar-produto.service';
import { IDeletarProdutoUseCase } from 'src/core/domain/produtos/usecase/Ideletar-produto.usecase';
import { IPedidosRepositoryPort } from 'src/core/domain/pedidos/port/persistence/Ipedido-repository.port';
import { PedidoPostgresRepository } from 'src/infrastructure/persistence/prisma/repository/pedido/pedido-postgres.repository';


const persistenceProviders: Provider[] = [
  PrismaService,
  {
    provide: IProdutoRepositoryPort,
    useFactory: (prisma: PrismaService) => new ProdutoPostgresRepository(prisma),
    inject: [PrismaService]
  },
  {
    provide: IPedidosRepositoryPort,
    useFactory: (prisma: PrismaService) => new PedidoPostgresRepository(prisma),
    inject: [PrismaService]
  }
]

const useCaseProviders: Provider[] = [
  {
    provide: ICadastraProdutoUseCase,
    useFactory: (repository: IProdutoRepositoryPort) => new CadastrarProdutoService(repository),
    inject: [IProdutoRepositoryPort]
  },
  {
    provide: IDeletarProdutoUseCase,
    useFactory: (produtoRepository: IProdutoRepositoryPort, pedidoRepository: IPedidosRepositoryPort) => new DeletarProdutoService(produtoRepository, pedidoRepository),
    inject: [IProdutoRepositoryPort, IPedidosRepositoryPort]
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
export class ProdutoModule { }
