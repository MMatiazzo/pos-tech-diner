import { Pedido } from "../../entity/pedido.entity";

export interface IPedidosRepositoryPort {
  criar(produtosIds: string[], payload: Pedido): Promise<Pedido>;
  listar(): Promise<Pedido[]>;
}

export const IPedidosRepositoryPort = Symbol('IPedidosRepositoryPort');
