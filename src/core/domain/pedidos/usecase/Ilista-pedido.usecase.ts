import { Pedido } from "../entity/pedido.entity";

export interface IListaPedidoUseCase {
  execute(): Promise<Pedido[]>
}

export const IListaPedidoUseCase = Symbol('IListaPedidoUseCase');