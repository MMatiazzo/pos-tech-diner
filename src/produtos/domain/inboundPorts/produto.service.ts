import { Inject, Injectable } from '@nestjs/common';
import { Produto } from '../entities/produto.entity';
import { IProdutoRepository } from '../outboundPorts/Iproduto.repository';
import { IProdutosService } from './Iproduto.service';

@Injectable()
export class ProdutosService implements IProdutosService {
  constructor(
    @Inject(IProdutoRepository)
    private produtoRepository: IProdutoRepository
  ){}

  async cadastrar(nome: string, categoria: string, preco: number, descricao: string, imagens: string[]): Promise<Produto> {
    const novoProduto = Produto.criarProduto(nome, categoria, preco, descricao, imagens);
    const produtoCadastrado = await this.produtoRepository.cadastrar(novoProduto);
    return produtoCadastrado;
  }
  
  editar(id): Promise<Produto> {
    throw new Error('Method not implemented.');
  }
  remover(id: string): Promise<Produto> {
    throw new Error('Method not implemented.');
  }
  buscar(key: string[]): Promise<Produto[]> {
    throw new Error('Method not implemented.');
  }
}
