import { Inject, Injectable } from "@nestjs/common";
import { Produto } from "src/core/domain/produtos/entity/produto.entity";
import { IProdutoRepositoryPort } from "src/core/domain/produtos/port/persistence/Iproduto-repository.port";
import { IBuscarProdutoPorCategoriaPort } from "src/core/domain/produtos/port/usecase/Ibuscar-produto-por-categoria.port";
import { IBuscarProdutoPorCategoriaUseCase } from "src/core/domain/produtos/usecase/Ibuscar-produto-por-categoria.usecase";


@Injectable()
export class BuscarProdutoPorCategoria implements IBuscarProdutoPorCategoriaUseCase {
  constructor(
    @Inject(IProdutoRepositoryPort)
    private produtoRepository: IProdutoRepositoryPort
  ) { }

  async execute(payload: IBuscarProdutoPorCategoriaPort): Promise<Produto[]> {
    const produto = await this.produtoRepository.buscar(payload.categoria);
    return produto;
  }
}