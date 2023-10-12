import { Injectable } from '@nestjs/common';
import { IPedidosRepository } from 'src/pedidos/domain/outboundPorts/IPedidosRepository';
import { Pedido } from 'src/pedidos/domain/entities/Pedido';

/**
 * This is the implementation of output port, to store things in memory.
 */
@Injectable()
export class PedidosInMemory implements IPedidosRepository {
  
  private readonly pedidos: Pedido[] = [new Pedido(1, [])];

  list(id: number): Pedido {
    return this.pedidos.find(pedido => pedido.id === id);
  }
}
