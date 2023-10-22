export class Produto {
  nome: string
  categoria:  string
  preco: number
  descricao: string
  imagens: string[]

  static criarProduto(nome: string, categoria: string, preco: number, descricao: string, imagens: string[]): Produto {
    const novoProduto = new Produto();
    novoProduto.nome = nome;
    novoProduto.categoria = categoria;
    novoProduto.preco = preco;
    novoProduto.descricao = descricao;
    novoProduto.imagens = imagens;

    return novoProduto;
  }
}
