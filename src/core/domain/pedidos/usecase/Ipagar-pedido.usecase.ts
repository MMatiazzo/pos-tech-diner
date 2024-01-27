import { IPagarPedidoPort } from '../port/usecase/Ipagar-pedido.port';

export interface IPagarPedidoUseCase {
  execute(payload: IPagarPedidoPort): Promise<void>;
}

export const IPagarPedidoUseCase = Symbol('IPagarPedidoUseCase');
