import { Inject, Injectable } from '@nestjs/common';
import { Pedido } from 'src/core/domain/pedidos/entity/pedido.entity';
import { IPedidosRepositoryPort } from 'src/core/domain/pedidos/port/persistence/Ipedido-repository.port';
import { PrismaService } from "../../prisma.service";

@Injectable()
export class PedidoPostgresRepository implements IPedidosRepositoryPort {

  constructor(
    @Inject(PrismaService)
    private prisma: PrismaService
  ) { }

  async criar(produtosIds: string[], payload: Pedido): Promise<Pedido> {
    const pedido = await this.prisma.pedido.create({ data: { status: payload.status, clienteId: payload.cpf } });

    const pedidosItensPromise = produtosIds.map(pid => this.prisma.pedidoItems.create({ data: { pedidoId: pedido.id, produtoId: pid } }));

    Promise.all(pedidosItensPromise);

    return pedido;
  }

  async listar(): Promise<Pedido[]> {
    const pedidos = await this.prisma.pedido.findMany();
    return pedidos;
  }

  async atualizarPedidoStatus(id: string, newStatus: string): Promise<Pedido> {
    const pedido = await this.prisma.pedido.update({
      where: { id },
      data: {
        status: newStatus,
      },
    });
    return pedido;
  }

  async getProdutoPorId(id: string): Promise<Pedido> {
    const pedido = await this.prisma.pedido.findUnique({ where: { id } });
    return pedido;
  }

  async getPedidosEmAndamento(): Promise<Pedido[]> {
    const pedidos = await this.prisma.pedido.findMany({
      where: {
        status: {
          not: 'finalizado' // trocar isso por um macro ou enum
        }
      }
    });

    return pedidos;
  }

  async getProdutosPorPedidos(ids: string[]): Promise<any> {
    const produtos = await this.prisma.pedidoItems.findMany({ where: { pedidoId: { in: ids } } })
    return produtos;
  }
} 