import { Produto } from '../entities/produto.entity';

/**
 * Interface for Produto Repository, outbound port
 */
export interface IProdutoRepository {
  cadastrar(produto: Produto): Promise<Produto>;
  editar(id: string): Promise<null | Produto>;
  remover(id: string): Promise<null | Produto>;
  buscar(key: string[]): Promise<null | Produto[]>;
}

export const IProdutoRepository = Symbol('IProdutoRepository');
