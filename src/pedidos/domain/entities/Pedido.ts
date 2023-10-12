import { IProduto } from "./IProduto";

export class Pedido {
  id: number;
  produtos: IProduto[];

  constructor(id: number, produtos: IProduto[]) {
    this.id = id;
    this.produtos = produtos;
  }

  setProdutos(produto: IProduto) {
    // gera comando para setar produtos
    this.produtos.push(produto)
  }
}