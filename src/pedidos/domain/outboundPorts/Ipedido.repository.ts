import { Pedido } from '../entities/pedido.entity';

/**
 * Interface for Pedido Repository, outbound port
 */
export interface IPedidosRepository {
  criar(produtosIds: string[], status: string, clienteCpf?: string): Promise<Pedido>;
}

export const IPedidosRepository = Symbol('IPedidosRepository');
