// import { Injectable } from '@nestjs/common';
// import { Pedido } from 'src/pedidos/domain/entities/pedido.entity';
// import { IPedidosRepository } from 'src/pedidos/domain/outboundPorts/Ipedido.repository';
// import { PrismaService } from 'src/prisma/prisma.service';

// /**
//  * This is the implementation of output port, to store things in memory.
//  */
// @Injectable()
// export class PeditosPostgres implements IPedidosRepository {

//   constructor(
//     private prismaRepository: PrismaService
//   ){}

//   async criar(produtosIds: string[], status: string, clienteCpf?: string): Promise<Pedido> {

//     const cpf = clienteCpf ? clienteCpf : null;

//     const pedido = await this.prismaRepository.pedido.create({data: { status, clienteId: cpf }});

//     const pedidosItensPromise = produtosIds.map(pid => this.prismaRepository.pedidoItems.create({data: { pedidoId: pedido.id, produtoId: pid }}));

//     Promise.all(pedidosItensPromise);

//     return pedido;
//   }

//   async listar(): Promise<Pedido[]> {
//     const pedidos =  await this.prismaRepository.pedido.findMany();
//     return pedidos;
//   }
// }
