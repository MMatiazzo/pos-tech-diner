
export class Pedido {
  status: string;
  clienteCpf?: string;

  static criaPedido(status: string, clienteCpf?: string): Pedido {
    const novoPedido = new Pedido();
    novoPedido.status = status;
    if(clienteCpf) novoPedido.clienteCpf = clienteCpf;

    return novoPedido;
  }
}