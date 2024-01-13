import { Inject, Injectable } from "@nestjs/common";
import { Produto } from "src/core/domain/produtos/entity/produto.entity";
import { ICadastraProdutoPort } from "src/core/domain/produtos/port/usecase/Icadastra-produto.port";
import { ICadastraProdutoUseCase } from "src/core/domain/produtos/usecase/Icadastra-produto.usecase";
import { IProdutoRepository } from "src/produtos/domain/outboundPorts/Iproduto.repository";

@Injectable()
export class CadastrarProdutoService implements ICadastraProdutoUseCase {
  constructor(
    @Inject(IProdutoRepository)
    private produtoRepository: IProdutoRepository
  ) {}

  async execute(payload: ICadastraProdutoPort): Promise<Produto> {
    const produtoEntity = Produto.new(payload);
    const produto = await this.produtoRepository.cadastrar(produtoEntity);
    return produto;
  }
}