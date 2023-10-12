import { Pedido } from "../entities/Pedido";
import { IPedidosService } from "./IPedidosService";

export class PedidosService implements IPedidosService {
  async listar(id: number){
    return null as Pedido;
  };
}