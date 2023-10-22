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
  
  async editar(id: string, campo: string, valor: string | number | string[]): Promise<Produto | never> {
    const produtoAtt = await this.produtoRepository.editar(id, campo, valor)
    return produtoAtt;
  }
  async remover(id: string): Promise<Produto | null> {
    const produtoRemovido = await this.produtoRepository.remover(id);
    return produtoRemovido;
  }
  async buscar(categoria: string): Promise<Produto[]> {
    const produtos = await this.produtoRepository.buscar(categoria);
    return produtos;
  }
}
