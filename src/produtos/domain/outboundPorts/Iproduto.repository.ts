import { Produto } from '../entities/produto.entity';

/**
 * Interface for Produto Repository, outbound port
 */
export interface IProdutoRepository {
  cadastrar(produto: Produto): Promise<Produto>;
  editar(id: string, campo: string, valor: string | number | string[]): Promise<Produto | never>; 
  remover(id: string): Promise<null | Produto>;
  buscar(categoria: string): Promise<null | Produto[]>;
}

export const IProdutoRepository = Symbol('IProdutoRepository');
