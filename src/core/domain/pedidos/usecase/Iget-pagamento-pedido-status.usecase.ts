import { IGetPedidoPagamentoStatusPort } from "../port/usecase/Iget-pedido-pagamento-status.port";

export interface IGetPedidoPagamentoStatusUseCase {
  execute(payload: IGetPedidoPagamentoStatusPort): Promise<boolean>
}

export const IGetPedidoPagamentoStatusUseCase = Symbol('IGetPedidoPagamentoStatusUseCase');