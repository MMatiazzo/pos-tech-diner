import { Produto } from "src/produtos/domain/entities/produto.entity";

export interface IProdutoRepositoryPort {
  cadastrar(produto: Produto): Promise<Produto>;
  editar(id: string, campo: string, valor: string | number | string[]): Promise<Produto | never>; 
  remover(id: string): Promise<null | Produto>;
  buscar(categoria: string): Promise<null | Produto[]>;
}

export const IProdutoRepositoryPort = Symbol('IProdutoRepositoryPort');
