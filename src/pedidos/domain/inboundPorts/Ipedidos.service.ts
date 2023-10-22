import { Pedido } from "../entities/pedido.entity";

export interface IPedidosService {
  criar: (nome: string, categoria: string, preco: Number, descricao: string, image: string[]) => Promise<Pedido>;
  listar: (nome: string, categoria: string) => Promise<Pedido[]>; // não tem requisito
  editar: (id: string) => Promise<Pedido>;
  remover: (id: string) => Promise<Pedido>;
}