
import { Produto } from "../entity/produto.entity";
import { IDeletarProdutoPort } from "../port/usecase/Ideletar-produto.port";

export interface IDeletarProdutoUseCase {
  execute(payload: IDeletarProdutoPort): Promise<Produto>
}

export const IDeletarProdutoUseCase = Symbol('IDeletarProdutoUseCase');