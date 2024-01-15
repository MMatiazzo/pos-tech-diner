import { Pedido } from "../entity/pedido.entity";
import { ICadastraPedidoPort } from "../port/usecase/Icadastra-pedido.port";

export interface ICadastrarPedidoUseCase {
  execute(payload: ICadastraPedidoPort): Promise<Pedido>
}

export const ICadastrarPedidoUseCase = Symbol('ICadastrarPedidoUseCase');