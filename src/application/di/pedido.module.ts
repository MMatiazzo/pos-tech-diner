import { Module } from '@nestjs/common';
import { Provider } from '@nestjs/common/interfaces/modules/provider.interface';

import { PrismaService } from "../../infrastructure/persistence/prisma/prisma.service";

import { IPedidosRepositoryPort } from 'src/core/domain/pedidos/port/persistence/Ipedido-repository.port';
import { ICadastrarPedidoUseCase } from 'src/core/domain/pedidos/usecase/Icadastra-pedido.usecase';

import { IClienteRepositoryPort } from 'src/core/domain/cliente/ports/persistence/Icliente-repository.port';
import { CadastrarPedidoService } from 'src/core/services/pedido/usecase/cadastrar-pedido.service';
import { ClientePostgresRepository } from 'src/infrastructure/persistence/prisma/repository/cliente/cliente-postgres.repository';
import { PedidoPostgresRepository } from 'src/infrastructure/persistence/prisma/repository/pedido/pedido-postgres.repository';
import { PedidoController } from '../api/http-rest/controller/pedido.controller';
import { IListaPedidoUseCase } from 'src/core/domain/pedidos/usecase/Ilista-pedido.usecase';
import { ListaPedidoService } from 'src/core/services/pedido/usecase/listar-pedido.service';


const persistenceProviders: Provider[] = [
  PrismaService,
  {
    provide: IPedidosRepositoryPort,
    useFactory: (prisma: PrismaService) => new PedidoPostgresRepository(prisma),
    inject: [PrismaService]
  },
  {
    provide: IClienteRepositoryPort,
    useFactory: (prisma: PrismaService) => new ClientePostgresRepository(prisma),
    inject: [PrismaService]
  }
]

const useCaseProviders: Provider[] = [
  {
    provide: ICadastrarPedidoUseCase,
    useFactory: (pedidoRepository: IPedidosRepositoryPort, clienteRepository: IClienteRepositoryPort) => new CadastrarPedidoService(pedidoRepository, clienteRepository),
    inject: [IPedidosRepositoryPort, IClienteRepositoryPort]
  },

  {
    provide: IListaPedidoUseCase,
    useFactory: (pedidoRepository: IPedidosRepositoryPort) => new ListaPedidoService(pedidoRepository),
    inject: [IPedidosRepositoryPort]
  },
]

@Module({
  controllers: [PedidoController],
  imports: [],
  providers: [
    ...persistenceProviders,
    ...useCaseProviders,
  ],
})
export class PedidoModule { }
