import { Module } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { PrismaService } from '../../infrastructure/persistence/prisma/prisma.service';

import { IPedidosRepositoryPort } from 'src/core/domain/pedidos/port/persistence/Ipedido-repository.port';
import { ICadastrarPedidoUseCase } from 'src/core/domain/pedidos/usecase/Icadastra-pedido.usecase';

import { IClienteRepositoryPort } from 'src/core/domain/cliente/ports/persistence/Icliente-repository.port';
import { IAtualizarPedidoStatusUseCase } from 'src/core/domain/pedidos/usecase/Iatuliza-pedido-status.usecase';
import { IGetPedidoPagamentoStatusUseCase } from 'src/core/domain/pedidos/usecase/Iget-pagamento-pedido-status.usecase';
import { IListaPedidoUseCase } from 'src/core/domain/pedidos/usecase/Ilista-pedido.usecase';
import { IPagarPedidoUseCase } from 'src/core/domain/pedidos/usecase/Ipagar-pedido.usecase';
import { IProdutoRepositoryPort } from 'src/core/domain/produtos/port/persistence/Iproduto-repository.port';
import { AtualizarPedidoStatusService } from 'src/core/services/pedido/usecase/atualizar-pedido-status.service';
import { CadastrarPedidoService } from 'src/core/services/pedido/usecase/cadastrar-pedido.service';
import { GetPagamentoPedidoStatusService } from 'src/core/services/pedido/usecase/get-pagamento-pedido-status.service';
import { ListaPedidoService } from 'src/core/services/pedido/usecase/listar-pedido.service';
import { PagarPedidoService } from 'src/core/services/pedido/usecase/pagar-pedido.service';
import { PagamentoMock } from 'src/infrastructure/framework/payment-gateway/payment-mock/pagamento-mock';
import { ClientePostgresRepository } from 'src/infrastructure/persistence/prisma/repository/cliente/cliente-postgres.repository';
import { PedidoPostgresRepository } from 'src/infrastructure/persistence/prisma/repository/pedido/pedido-postgres.repository';
import { ProdutoPostgresRepository } from 'src/infrastructure/persistence/prisma/repository/produto/produto-postgres.repository';
import { PedidoController } from '../api/http-rest/controller/pedido.controller';

const persistenceProviders: Provider[] = [
  PrismaService,
  {
    provide: IPedidosRepositoryPort,
    useFactory: (prisma: PrismaService) => new PedidoPostgresRepository(prisma),
    inject: [PrismaService],
  },
  {
    provide: IClienteRepositoryPort,
    useFactory: (prisma: PrismaService) =>
      new ClientePostgresRepository(prisma),
    inject: [PrismaService],
  },
  {
    provide: IProdutoRepositoryPort,
    useFactory: (prisma: PrismaService) =>
      new ProdutoPostgresRepository(prisma),
    inject: [PrismaService],
  },
];

const useCaseProviders: Provider[] = [
  {
    provide: ICadastrarPedidoUseCase,
    useFactory: (
      pedidoRepository: IPedidosRepositoryPort,
      clienteRepository: IClienteRepositoryPort,
      produtoRepository: IProdutoRepositoryPort,
    ) => new CadastrarPedidoService(pedidoRepository, clienteRepository, produtoRepository),
    inject: [IPedidosRepositoryPort, IClienteRepositoryPort, IProdutoRepositoryPort],
  },
  {
    provide: IGetPedidoPagamentoStatusUseCase,
    useFactory: (repository: IPedidosRepositoryPort) =>
      new GetPagamentoPedidoStatusService(repository),
    inject: [IPedidosRepositoryPort],
  },
  {
    provide: IListaPedidoUseCase,
    useFactory: (pedidoRepository: IPedidosRepositoryPort) =>
      new ListaPedidoService(pedidoRepository),
    inject: [IPedidosRepositoryPort],
  },
  {
    provide: IAtualizarPedidoStatusUseCase,
    useFactory: (pedidoRepository: IPedidosRepositoryPort) =>
      new AtualizarPedidoStatusService(pedidoRepository),
    inject: [IPedidosRepositoryPort],
  },
  {
    provide: IPagarPedidoUseCase,
    useFactory: (pedidoRepository: IPedidosRepositoryPort) => {
      const pagamentoMock = new PagamentoMock();
      return new PagarPedidoService(pedidoRepository, pagamentoMock);
    },
    inject: [IPedidosRepositoryPort],
  },
];

@Module({
  controllers: [PedidoController],
  imports: [],
  providers: [...persistenceProviders, ...useCaseProviders],
})
export class PedidoModule { }
