import { Produto } from 'src/core/domain/produtos/entity/produto.entity';
import { IProdutoRepositoryPort } from 'src/core/domain/produtos/port/persistence/Iproduto-repository.port';

export class ProdutoMockRepository implements IProdutoRepositoryPort {
  buscarPorIds(ids: string[]): Promise<Produto[]> {
    throw new Error('Method not implemented.');
  }
  buscar(categoria: string): Promise<Produto[]> {
    throw new Error('Method not implemented.');
  }
  produtos: Produto[] = [];

  async cadastrar(produto: Produto): Promise<Produto> {
    this.produtos.push(produto);
    return produto;
  }

  async editar(
    id: string,
    campo: string,
    valor: string | number | string[],
  ): Promise<Produto | never> {
    const novoProduto = {
      id: '1',
      nome: 'produto teste',
      categoria: 'Lanche',
      preco: 10,
      descricao: 'produto teste',
      imagens: [],
    };
    this.produtos.push(novoProduto);
    const index = this.produtos.findIndex((p) => p.id === id);
    this.produtos[index][campo] = valor;

    return this.produtos[index];
  }

  async remover(id: string): Promise<Produto | null> {
    const novoProduto = {
      id: '1',
      nome: 'produto teste',
      categoria: 'Lanche',
      preco: 10,
      descricao: 'produto teste',
      imagens: [],
    };
    this.produtos.push(novoProduto);
    const produtoDeletado = this.produtos.find((p) => p.id === id);
    this.produtos.filter((p) => p.id !== id);
    return produtoDeletado;
  }
}
