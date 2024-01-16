
import { Produto } from "../entity/produto.entity";
import { ICadastraProdutoPort } from "../port/usecase/Icadastra-produto.port";

export interface ICadastraProdutoUseCase {
  execute(payload: ICadastraProdutoPort): Promise<Produto>
}

export const ICadastraProdutoUseCase = Symbol('ICadastraProdutoUseCase');