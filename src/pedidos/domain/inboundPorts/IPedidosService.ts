import { Pedido } from "../entities/Pedido";

export interface IPedidosService {
  listar: (id: number) => Promise<Pedido>;
}