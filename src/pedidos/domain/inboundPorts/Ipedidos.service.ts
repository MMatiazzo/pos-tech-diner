import { Pedido } from "../entities/pedido.entity";

export interface IPedidosService {
  criar: (produtosIds: string[], status: string, clienteCpf?: string) => Promise<Pedido>;
  listar: () => Promise<Pedido[]>;
}