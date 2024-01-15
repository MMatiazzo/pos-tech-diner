import { CriaPedidoEntityPayload } from "./type/cria-pedido-entity.payload";

export class Pedido {
  status: string;
  cpf?: string;

  private constructor(payload: CriaPedidoEntityPayload) {
    this.status = payload.status;
    if(payload.cpf) this.cpf = payload.cpf;
  }

  public static new(payload: CriaPedidoEntityPayload) {
    const pedido = new Pedido(payload);
    return pedido;
  }
}