import { Pedido } from '../entities/pedido.entity';

/**
 * Interface for Pedido Repository, outbound port
 */
export interface IPedidosRepository {
  list(id: number): Pedido;
}

export const IPedidosRepository = Symbol('IPedidosRepository');
