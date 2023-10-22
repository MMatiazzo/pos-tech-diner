export class PedidosItems {
  produtoId: string;
  pedidoId: string;

  static criaPedidosItens(
    produtoId: string,
    pedidoId: string,
  ): PedidosItems {
    const novoPedidoItem = new PedidosItems();
    novoPedidoItem.produtoId = produtoId;
    novoPedidoItem.pedidoId = pedidoId;

    return novoPedidoItem;
  }
}