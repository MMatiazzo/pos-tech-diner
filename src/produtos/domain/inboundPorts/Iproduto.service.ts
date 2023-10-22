import { Produto } from "../entities/produto.entity";

export interface IProdutosService {
  cadastrar(nome: string, categoria: string, preco: Number, descricao: string, imagens: string[]): Promise<Produto>;
  editar(id: string): Promise<null | Produto>;
  remover(id: string): Promise<null | Produto>;
  buscar(key: string[]): Promise<null | Produto[]>;
}

export const IProdutosService = Symbol('IProdutosService');

