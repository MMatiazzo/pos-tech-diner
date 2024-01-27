import { IAtualizarPedidoStatusPort } from "../port/usecase/Iatualizar-pedido-status.port";

export interface IAtualizarPedidoStatusUseCase {
  execute(payload: IAtualizarPedidoStatusPort): Promise<any>
}

export const IAtualizarPedidoStatusUseCase = Symbol('IAtualizarPedidoStatusUseCase');