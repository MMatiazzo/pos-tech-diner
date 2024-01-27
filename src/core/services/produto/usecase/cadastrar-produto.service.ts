import { Inject, Injectable } from "@nestjs/common";
import { Produto } from "src/core/domain/produtos/entity/produto.entity";
import { IProdutoRepositoryPort } from "src/core/domain/produtos/port/persistence/Iproduto-repository.port";
import { ICadastraProdutoPort } from "src/core/domain/produtos/port/usecase/Icadastra-produto.port";
import { ICadastraProdutoUseCase } from "src/core/domain/produtos/usecase/Icadastra-produto.usecase";

@Injectable()
export class CadastrarProdutoService implements ICadastraProdutoUseCase {
  constructor(
    @Inject(IProdutoRepositoryPort)
    private produtoRepository: IProdutoRepositoryPort
  ) { }

  async execute(payload: ICadastraProdutoPort): Promise<Produto> {
    const produtoEntity = Produto.new(payload);
    const produto = await this.produtoRepository.cadastrar(produtoEntity);
    return produto;
  }
}