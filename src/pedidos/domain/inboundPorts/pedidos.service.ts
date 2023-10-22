import { Pedido } from "../entities/pedido.entity";
import { IPedidosService } from "./Ipedidos.service";

export class PedidosService implements IPedidosService {
  criar(nome: string, categoria: string, preco: Number, descricao: string, image: string[]) {
    return null;
  }
  listar(nome: string): Promise<Pedido[] | null> {
    return null;
  };
  editar(id: string): Promise<Pedido> {
    return null;
  }
  remover(id: string): Promise<Pedido> {
    return null;
  };
}