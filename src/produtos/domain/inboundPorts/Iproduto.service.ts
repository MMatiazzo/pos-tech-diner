import { Produto } from "../entities/produto.entity";

export interface IProdutosService {
  cadastrar(nome: string, categoria: string, preco: Number, descricao: string, imagens: string[]): Promise<Produto>;
  editar(id: string, campo: string, valor: string | number | string[]): Promise<Produto | never>;
  remover(id: string): Promise<null | Produto>;
  buscar(categoria: string): Promise<null | Produto[]>;
}

export const IProdutosService = Symbol('IProdutosService');

