import { Produto } from "src/produtos/domain/entities/produto.entity";
import { IBuscarProdutoPorCategoriaPort } from "../port/usecase/Ibuscar-produto-por-categoria.port";

export interface IBuscarProdutoPorCategoriaUseCase {
  execute(payload: IBuscarProdutoPorCategoriaPort): Promise<Produto[]>
}

export const IBuscarProdutoPorCategoriaUseCase = Symbol('IBuscarProdutoPorCategoriaUseCase');