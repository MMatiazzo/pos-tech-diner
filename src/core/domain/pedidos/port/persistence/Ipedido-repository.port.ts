import { Pedido } from "../../entity/pedido.entity";

export interface IPedidosRepositoryPort {
  criar(produtosIds: string[], payload: Pedido): Promise<Pedido>;
  listar(): Promise<Pedido[]>;
  getPedidosEmAndamento(): Promise<any[]>;
  getProdutosPorPedidos(ids: string[]): Promise<any>;
}

export const IPedidosRepositoryPort = Symbol('IPedidosRepositoryPort');
