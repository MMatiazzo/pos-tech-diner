import { Pedido } from '../../../../../core/domain/pedidos/entity/pedido.entity';
import { IPedidosRepositoryPort } from '../../../../../core/domain/pedidos/port/persistence/Ipedido-repository.port';

export class PedidoMockRepository implements IPedidosRepositoryPort {
  criar(produtosIds: string[], payload: Pedido): Promise<Pedido> {
    throw new Error('Method not implemented.');
  }
  listar(): Promise<Pedido[]> {
    throw new Error('Method not implemented.');
  }
  getPedidosEmAndamento(): Promise<any[]> {
    const mock = Promise.resolve([]);
    return mock;
  }
  getProdutosPorPedidos(ids: string[]): Promise<any> {
    const mock = Promise.resolve([]);
    return mock;
  }
  getProdutoPorId(id: string): Promise<Pedido> {
    throw new Error('Method not implemented.');
  }
  atualizarPedidoStatus(id: string, status: string): Promise<Pedido> {
    throw new Error('Method not implemented.');
  }
  getPedidoPorId(id: string): Promise<Pedido> {
    throw new Error('Method not implemented.');
  }
}
