import { Inject, Injectable } from "@nestjs/common";
import { Produto } from "src/core/domain/produtos/entity/produto.entity";
import { IEditarProdutoPort } from "src/core/domain/produtos/port/usecase/Ieditar-produto.port";
import { IEditarProdutoUseCase } from "src/core/domain/produtos/usecase/Ieditar-produto.usecase";
import { IProdutoRepository } from "src/produtos/domain/outboundPorts/Iproduto.repository";

@Injectable()
export class EditarProdutoService implements IEditarProdutoUseCase {
  constructor(
    @Inject(IProdutoRepository)
    private produtoRepository: IProdutoRepository
  ) { }

  async execute(payload: IEditarProdutoPort): Promise<Produto> {
    const produto = await this.produtoRepository.editar(payload.id, payload.campo, payload.valor);
    return produto;
  }
}