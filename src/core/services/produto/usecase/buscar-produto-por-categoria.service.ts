import { Inject, Injectable } from "@nestjs/common";
import { Produto } from "src/core/domain/produtos/entity/produto.entity";
import { IBuscarProdutoPorCategoriaPort } from "src/core/domain/produtos/port/usecase/Ibuscar-produto-por-categoria.port";
import { IBuscarProdutoPorCategoriaUseCase } from "src/core/domain/produtos/usecase/Ibuscar-produto-por-categoria.usecase";
import { IProdutoRepository } from "src/produtos/domain/outboundPorts/Iproduto.repository";

@Injectable()
export class BuscarProdutoPorCategoria implements IBuscarProdutoPorCategoriaUseCase {
  constructor(
    @Inject(IProdutoRepository)
    private produtoRepository: IProdutoRepository
  ) { }

  async execute(payload: IBuscarProdutoPorCategoriaPort): Promise<Produto[]> {
    const produto = await this.produtoRepository.buscar(payload.categoria);
    return produto;
  }
}