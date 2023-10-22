import { IProduto } from "./IProduto";

export class Pedido {
  id: number;
  produtos: IProduto[];

  setProdutos(produto: IProduto) {
    // gera comando para setar produtos
    this.produtos.push(produto)
  }
}