import { CriaProdutoEntityPayload } from "./type/cria-produto-entity.payload"

export class Produto {
  nome: string
  categoria: string;
  preco: number
  descricao: string
  imagens: string[]

  private constructor(paylod: CriaProdutoEntityPayload) {
    this.nome = paylod.nome;
    this.categoria = paylod.categoria;
    this.preco = paylod.preco;
    this.descricao = paylod.descricao;
    this.imagens = paylod.imagens;
  }

  public static new(payload: CriaProdutoEntityPayload) {
    const produto = new Produto(payload);
    return produto;
  }
}
