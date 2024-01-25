import { Inject, Injectable } from "@nestjs/common";
import { Produto } from "src/core/domain/produtos/entity/produto.entity";
import { IProdutoRepositoryPort } from "src/core/domain/produtos/port/persistence/Iproduto-repository.port";
import { IEditarProdutoPort } from "src/core/domain/produtos/port/usecase/Ieditar-produto.port";
import { IEditarProdutoUseCase } from "src/core/domain/produtos/usecase/Ieditar-produto.usecase";
import { BadRequestException } from "@nestjs/common";

@Injectable()
export class EditarProdutoService implements IEditarProdutoUseCase {
  constructor(
    @Inject(IProdutoRepositoryPort)
    private produtoRepository: IProdutoRepositoryPort
  ) { }

  async execute(payload: IEditarProdutoPort): Promise<Produto> {
    if(
      (["nome", "categoria", "descricao"].includes(payload.campo) && (typeof payload.valor !== "string")) ||
      (payload.campo === "preco" && (typeof payload.valor !== "number")) || 
      (payload.campo === "imagens" && (typeof payload.valor !== "object"))
      ) {
      throw new BadRequestException("Valor inválido para o tipo de campo indicado");
    }

    const produto = await this.produtoRepository.editar(payload.id, payload.campo, payload.valor);
    return produto;
  }
}