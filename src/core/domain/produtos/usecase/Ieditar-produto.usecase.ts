import { Produto } from "src/produtos/domain/entities/produto.entity";
import { IEditarProdutoPort } from "../port/usecase/Ieditar-produto.port";

export interface IEditarProdutoUseCase {
  execute(payload: IEditarProdutoPort): Promise<Produto>
}

export const IEditarProdutoUseCase = Symbol('IEditarProdutoUseCase');